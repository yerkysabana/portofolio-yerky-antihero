/**
 * TAMBAHAN: stacking scroll — efek frame menumpuk (stacking cards).
 *
 * Cara kerja:
 * - Setiap <main> > section dapat kelas .stack-frame (position: sticky; top: 0;
 *   height: 100svh) sehingga frame berikutnya naik dari bawah dan menutupi
 *   frame sebelumnya seperti tumpukan kartu.
 * - Progres dihitung dari posisi scroll (getBoundingClientRect) di dalam satu
 *   listener scroll (passive) yang di-throttle dengan requestAnimationFrame —
 *   bukan timer, jadi efek ikut maju dan mundur sesuai arah scroll.
 * - Frame yang tertumpuk: mengecil (scale), miring tipis, dan meredup lewat
 *   overlay gelap berbasis opacity (lihat CSS variable --stack-progress).
 * - Frame yang masuk: miring (--rotate-in) lalu meluruskan saat menempel
 *   (lihat CSS variable --enter).
 * - Frame yang isinya lebih tinggi dari viewport dapat kelas .stack-frame--tall
 *   → scroll normal dulu, tidak dipotong dan tidak menumpuk.
 * - Bar progres scroll + indikator nomor frame (01, 02, ...) dibuat di sini
 *   dan bisa diklik untuk lompat ke frame.
 */

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * TAMBAHAN: stacking scroll — ukur posisi asli (dokumen) elemen.
 *
 * position: sticky dimatikan sementara karena offsetTop / getBoundingClientRect
 * elemen yang sedang "stuck" bergeser mengikuti scroll — bukan posisi aslinya.
 * Pengukuran dilakukan sinkron dalam satu task, jadi tidak terlihat oleh pengguna.
 */
export function measureElementTops(elements: (HTMLElement | null)[]): number[] {
  const found = elements.filter((el): el is HTMLElement => el !== null);
  const inlinePosition = found.map((el) => el.style.position);

  found.forEach((el) => {
    el.style.position = 'static';
  });

  const tops = new Map<HTMLElement, number>();
  found.forEach((el) => {
    tops.set(el, el.getBoundingClientRect().top + window.scrollY);
  });

  found.forEach((el, index) => {
    el.style.position = inlinePosition[index];
  });

  return elements.map((el) => (el ? tops.get(el) ?? 0 : 0));
}

export function initStackingScroll(): void {
  const frames = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
  if (frames.length === 0) return;

  // TAMBAHAN: stacking scroll — pasang kelas frame ke semua section utama
  frames.forEach((frame) => frame.classList.add('stack-frame'));

  // TAMBAHAN: stacking scroll — bar progres scroll tipis di atas halaman
  const progressBar = document.createElement('div');
  progressBar.className = 'stack-progress-bar';
  document.body.appendChild(progressBar);

  // TAMBAHAN: stacking scroll — indikator nomor frame, klik untuk lompat
  const indicator = document.createElement('nav');
  indicator.className = 'stack-indicator';
  indicator.setAttribute('aria-label', 'Indikator frame portofolio');

  const indicatorButtons: HTMLButtonElement[] = frames.map((frame, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = String(index + 1).padStart(2, '0');
    button.title = frame.id || `Frame ${index + 1}`;
    button.setAttribute('aria-label', `Lompat ke frame ${index + 1}`);
    button.addEventListener('click', () => {
      // TAMBAHAN: stacking scroll — ukur posisi asli frame dulu (bukan offsetTop,
      // karena frame yang sedang stuck offsetTop-nya bergeser mengikuti scroll)
      const top = measureElementTops(frames)[index];
      window.scrollTo({ top, behavior: 'smooth' });
    });
    indicator.appendChild(button);
    return button;
  });
  document.body.appendChild(indicator);

  // TAMBAHAN: stacking scroll — frame tinggi = scroll normal (tidak menumpuk)
  let resizeTimer: number | undefined;

  // TAMBAHAN: stacking scroll — tinggi frame sebenarnya (100svh) diukur lewat probe.
  // window.innerHeight di mobile = layout viewport yang bisa lebih besar dari
  // 100svh (saat URL bar sembunyi), jadi tidak dipakai sebagai patokan.
  const measureFrameHeight = (): number => {
    const probe = document.createElement('div');
    probe.style.position = 'fixed';
    probe.style.top = '0';
    probe.style.left = '0';
    probe.style.height = '100svh';
    probe.style.visibility = 'hidden';
    probe.style.pointerEvents = 'none';
    document.body.appendChild(probe);
    const height = probe.getBoundingClientRect().height;
    probe.remove();
    return height;
  };

  const measureFrames = () => {
    const frameHeight = measureFrameHeight();
    frames.forEach((frame) => {
      frame.classList.toggle('stack-frame--tall', frame.scrollHeight > frameHeight + 4);
    });
  };

  const onResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(measureFrames, 150);
  };

  // TAMBAHAN: stacking scroll — update semua progres dari posisi scroll
  let ticking = false;

  const update = () => {
    ticking = false;
    const viewportHeight = window.innerHeight;
    let activeIndex = 0;

    frames.forEach((frame, index) => {
      const rect = frame.getBoundingClientRect();

      // Frame masuk/menempel: 0 (di bawah layar) → 1 (menempel di atas)
      const enter = clamp(1 - rect.top / viewportHeight, 0, 1);
      frame.style.setProperty('--enter', enter.toFixed(4));

      // Frame tertumpuk: seberapa besar frame berikutnya menutupinya
      const next = frames[index + 1];
      let covered = 0;
      if (next) {
        covered = clamp(1 - next.getBoundingClientRect().top / viewportHeight, 0, 1);
      }
      frame.style.setProperty('--stack-progress', covered.toFixed(4));

      // Frame aktif = frame terakhir yang sudah melewati setengah layar
      if (rect.top < viewportHeight * 0.5) activeIndex = index;
    });

    frames.forEach((frame, index) => {
      const isActive = index === activeIndex;
      frame.classList.toggle('is-active', isActive);
      // TAMBAHAN: stacking scroll — sekali muncul, tetap muncul: animasi reveal
      // tidak replay saat scroll naik-turun (halaman tidak terasa "refresh")
      if (isActive) frame.classList.add('has-revealed');
    });
    indicatorButtons.forEach((button, index) => {
      button.classList.toggle('is-active', index === activeIndex);
    });

    const documentElement = document.documentElement;
    const maxScroll = documentElement.scrollHeight - viewportHeight;
    const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${percent.toFixed(2)}%`;
  };

  // TAMBAHAN: stacking scroll — satu listener scroll, passive + rAF throttle
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  measureFrames();
  update();
}
