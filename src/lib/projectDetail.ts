/**
 * TAMBAHAN: detail proyek — halaman detail proyek fullscreen (vanilla JS, tanpa library).
 *
 * Cara pakai:
 *   import { openProjectDetail } from './lib/projectDetail';
 *   <button onClick={(e) => openProjectDetail(project.id, e.currentTarget)}>
 *
 * Fitur:
 * - FLIP: kartu yang diklik melebar dari posisinya sendiri hingga memenuhi layar
 * - Latar meredup + halaman utama mengecil sedikit (class body.detail-open)
 * - Tutup via tombol Kembali / Esc / swipe turun (animasi kebalikan ke kartu asal)
 * - Scroll halaman utama dikunci saat detail terbuka, posisi dikembalikan saat ditutup
 * - Fokus keyboard masuk ke detail (role="dialog" + aria-modal) dan kembali ke kartu
 * - Hero zoom-out + parallax, judul glitch huruf per huruf
 * - Blok konten slide-up + fade-in bergantian (IntersectionObserver)
 * - Statistik count-up dengan easing
 * - Galeri carousel drag/swipe + tilt 3D + lightbox zoom
 * - Tech stack memantul, stempel hasil bergetar, bar progres baca
 * - Tombol Proyek Berikutnya (panel lama keluar, panel baru masuk)
 * - Semua animasi hanya transform & opacity (60fps), hormati prefers-reduced-motion
 */

import { projectsData, projectDetailsData } from '../data/portfolioData';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let activePanel: HTMLElement | null = null;
let currentIndex = -1;
let savedScrollY = 0;
let lastTrigger: HTMLElement | null = null;
let keydownHandler: ((e: KeyboardEvent) => void) | null = null;

/** Escape HTML sederhana untuk aman menyisipkan data ke innerHTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isMobileViewport(): boolean {
  return window.matchMedia('(max-width: 900px)').matches;
}

/** TAMBAHAN: detail proyek — susun HTML panel detail dari data proyek. */
function buildPanelHtml(index: number): string {
  const project = projectsData[index];
  const detail = projectDetailsData[index];

  // judul: huruf per huruf untuk efek glitch masuk
  const letters = project.title
    .split('')
    .map((ch, i) => `<span class="pd-letter" style="--i:${i}">${escapeHtml(ch === ' ' ? '\u00A0' : ch)}</span>`)
    .join('');

  // gambar utama (GANTI: isi detail.image di portfolioData untuk memakai gambar asli)
  const heroMedia = detail.image
    ? `<img src="${escapeHtml(detail.image)}" alt="${escapeHtml(project.title)}" />`
    : `<div class="pd-hero-placeholder"><span class="pd-hero-placeholder-text">${escapeHtml(
        project.categoryLabel.toUpperCase(),
      )}</span></div>`;

  const blocks = [
    { title: '📖 LATAR BELAKANG', text: detail.background },
    { title: '💥 MASALAH', text: detail.problem },
    { title: '⚔️ SOLUSI', text: detail.solution },
    { title: '🏆 HASIL', text: detail.result, stamp: true },
  ]
    .map(
      (block, i) => `
    <section class="pd-block${block.stamp ? ' pd-result' : ''}" style="--i:${i}">
      <h3 class="pd-block-title">${block.title}</h3>
      <p>${escapeHtml(block.text)}</p>
      ${block.stamp ? `<div class="pd-stamp">${escapeHtml(project.stamp)}</div>` : ''}
    </section>`,
    )
    .join('');

  const stats = detail.stats
    .map(
      (stat, i) => `
      <div class="pd-stat" style="--i:${i}">
        <div class="pd-stat-value"><span class="pd-count" data-target="${stat.value}">0</span>${escapeHtml(
          stat.suffix ?? '',
        )}</div>
        <div class="pd-stat-label">${escapeHtml(stat.label)}</div>
      </div>`,
    )
    .join('');

  const slides = detail.gallery
    .map((item, i) => {
      // GANTI: isi item.image di portfolioData untuk memakai screenshot asli
      const media = item.image
        ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.caption)}" />`
        : `<div class="pd-slide-placeholder"><span>${escapeHtml(item.caption)}</span></div>`;
      return `
      <div class="pd-slide" data-slide="${i}">
        <div class="pd-slide-inner">
          ${media}
          <div class="pd-slide-caption">${escapeHtml(item.caption)}</div>
        </div>
      </div>`;
    })
    .join('');

  const dots = detail.gallery
    .map((_, i) => `<button type="button" class="pd-dot${i === 0 ? ' is-active' : ''}" aria-label="Slide ${i + 1}"></button>`)
    .join('');

  const techStack = detail.techStack
    .map(
      (tech, i) => `
      <div class="pd-stack-item" style="--i:${i}">
        <span>${escapeHtml(tech.icon)}</span>
        <span>${escapeHtml(tech.name)}</span>
      </div>`,
    )
    .join('');

  const nextIndex = (index + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  // tombol aksi: kalau link belum diisi ('#'), tombol non-aktif + petunjuk
  const actionBtn = (cls: string, label: string, url?: string) =>
    url && url !== '#'
      ? `<a class="pd-btn ${cls}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${label}</a>`
      : `<button class="pd-btn ${cls}" type="button" aria-disabled="true" title="GANTI: isi link proyek di portfolioData.ts">${label}</button>`;

  return `
    <div class="pd-backdrop"></div>
    <div class="pd-panel" role="dialog" aria-modal="true" aria-labelledby="pd-title-${index}" tabindex="-1">
      <div class="pd-progress"><div class="pd-progress-fill"></div></div>
      <div class="pd-scroll">
        <button type="button" class="pd-close">← KEMBALI</button>
        <header class="pd-hero">
          <div class="pd-hero-media">
            <div class="pd-hero-media-inner">${heroMedia}</div>
          </div>
          <div class="pd-hero-overlay"></div>
          <div class="pd-hero-content">
            <div class="pd-hero-badge">${escapeHtml(project.badge)}</div>
            <h2 class="pd-title" id="pd-title-${index}">${letters}</h2>
            <div class="pd-hero-sub">${escapeHtml(project.categoryLabel)} • ${escapeHtml(project.summary)}</div>
          </div>
        </header>
        <div class="pd-body">
          ${blocks}
          <section class="pd-stats">${stats}</section>
          <section class="pd-gallery">
            <div class="pd-gallery-viewport">
              <div class="pd-track">${slides}</div>
            </div>
            <div class="pd-dots">${dots}</div>
          </section>
          <section class="pd-stack">${techStack}</section>
          <footer class="pd-footer">
            <button type="button" class="pd-next">
              <span>
                <small>PROYEK BERIKUTNYA</small>
                <span class="pd-next-label">${escapeHtml(nextProject.title)}</span>
              </span>
              <span class="pd-next-arrow">➔</span>
            </button>
            <div class="pd-actions">
              ${actionBtn('', '🚀 KUNJUNGI PROYEK', detail.links.live)}
              ${actionBtn('pd-btn--secondary', '💻 LIHAT KODE', detail.links.repo)}
            </div>
          </footer>
        </div>
      </div>
    </div>
    <div class="pd-lightbox" aria-hidden="true">
      <button type="button" class="pd-lightbox-close">✕ TUTUP</button>
      <div class="pd-lightbox-content"></div>
    </div>`;
}

/** TAMBAHAN: detail proyek — count-up angka statistik dengan easing. */
function countUp(el: HTMLElement, target: number, duration = 1400): void {
  if (REDUCED_MOTION) {
    el.textContent = String(target);
    return;
  }
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4); // easeOutQuart
    el.textContent = String(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/** TAMBAHAN: detail proyek — galeri carousel: drag/swipe, dot, tilt 3D, lightbox. */
function wireGallery(panel: HTMLElement): void {
  const viewport = panel.querySelector<HTMLElement>('.pd-gallery-viewport');
  const track = panel.querySelector<HTMLElement>('.pd-track');
  if (!viewport || !track) return;

  const slides = Array.from(track.querySelectorAll<HTMLElement>('.pd-slide'));
  const dots = Array.from(panel.querySelectorAll<HTMLElement>('.pd-dot'));
  const lightbox = panel.querySelector<HTMLElement>('.pd-lightbox');
  const lightboxContent = panel.querySelector<HTMLElement>('.pd-lightbox-content');
  const lightboxClose = panel.querySelector<HTMLElement>('.pd-lightbox-close');

  let index = 0;
  let startX = 0;
  let startY = 0;
  let dragging = false;
  let moved = false;

  const goTo = (next: number, animate = true) => {
    index = Math.max(0, Math.min(slides.length - 1, next));
    track.style.transition = animate && !REDUCED_MOTION ? 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)' : 'none';
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((dot, di) => dot.classList.toggle('is-active', di === index));
  };

  // drag/swipe dengan pointer events (mouse + touch)
  viewport.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    moved = false;
    startX = e.clientX;
    startY = e.clientY;
    viewport.classList.add('is-dragging');
    track.style.transition = 'none';
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > 6) moved = true;
    // hanya geser kalau gerakan dominan horizontal (scroll vertikal tetap jalan)
    if (Math.abs(dx) > Math.abs(dy)) {
      track.style.transform = `translateX(calc(${-index * 100}% + ${dx}px))`;
    }
  });

  const endDrag = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove('is-dragging');
    const dx = e.clientX - startX;
    const threshold = Math.min(120, viewport.clientWidth * 0.2);
    if (dx < -threshold) goTo(index + 1);
    else if (dx > threshold) goTo(index - 1);
    else goTo(index);
  };

  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);

  dots.forEach((dot, di) => dot.addEventListener('click', () => goTo(di)));

  // tilt 3D saat hover (hanya perangkat ber-pointer halus, non-reduced-motion)
  if (!REDUCED_MOTION && FINE_POINTER) {
    slides.forEach((slide) => {
      const inner = slide.querySelector<HTMLElement>('.pd-slide-inner');
      if (!inner) return;
      slide.addEventListener('mousemove', (e) => {
        const rect = slide.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 8}deg)`;
      });
      slide.addEventListener('mouseleave', () => {
        inner.style.transform = '';
      });
    });
  }

  // klik slide → lightbox (abaikan kalau baru selesai di-drag)
  const openLightbox = (slideIndex: number) => {
    const slide = slides[slideIndex];
    if (!slide || !lightbox || !lightboxContent) return;
    const media = slide.querySelector('img, .pd-slide-placeholder');
    const caption = slide.querySelector('.pd-slide-caption')?.textContent ?? '';
    lightboxContent.innerHTML = media
      ? media.outerHTML
      : `<div class="pd-lightbox-placeholder"><span>${escapeHtml(caption)}</span></div>`;
    const captionEl = document.createElement('div');
    captionEl.className = 'pd-lightbox-caption';
    captionEl.textContent = caption;
    lightboxContent.appendChild(captionEl);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxClose?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
  };

  slides.forEach((slide, si) => {
    slide.addEventListener('click', () => {
      if (!moved) openLightbox(si);
    });
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose || lightboxClose?.contains(e.target as Node)) {
      closeLightbox();
    }
  });
  lightboxClose?.addEventListener('click', closeLightbox);

  // Esc menutup lightbox dulu sebelum menutup detail
  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('is-open')) {
      e.stopPropagation();
      closeLightbox();
    }
  });
}

/** TAMBAHAN: detail proyek — reveal bergantian + count-up saat terlihat. */
function wireReveal(panel: HTMLElement, scrollEl: HTMLElement): void {
  const targets = panel.querySelectorAll<HTMLElement>('.pd-block, .pd-stat, .pd-stack');
  if (REDUCED_MOTION) {
    targets.forEach((el) => el.classList.add('pd-visible'));
    panel.querySelectorAll<HTMLElement>('.pd-count').forEach((el) => {
      el.textContent = String(Number(el.dataset.target ?? '0'));
    });
    return;
  }

  // kumpulan elemen yang belum muncul; dihapus begitu di-reveal
  const pending = new Set<HTMLElement>(targets);

  const reveal = (el: HTMLElement) => {
    if (!pending.has(el)) return;
    pending.delete(el);
    el.classList.add('pd-visible');
    el.querySelectorAll<HTMLElement>('.pd-count').forEach((countEl) => {
      countUp(countEl, Number(countEl.dataset.target ?? '0'));
    });
    observer.unobserve(el);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const rootTop = entry.rootBounds ? entry.rootBounds.top : 0;
        // tampilkan juga kalau elemen sudah terlewat di atas viewport (scroll lompat)
        if (entry.isIntersecting || entry.boundingClientRect.bottom < rootTop) {
          reveal(el);
        }
      });
    },
    { threshold: 0.2, root: scrollEl },
  );

  targets.forEach((target) => observer.observe(target));

  // jaring pengaman: scroll lompat (swipe/gestur cepat) bisa melewati elemen tanpa memicu observer
  let sweepQueued = false;
  const sweep = () => {
    sweepQueued = false;
    const rootTop = scrollEl.getBoundingClientRect().top;
    pending.forEach((el) => {
      if (el.getBoundingClientRect().bottom < rootTop) reveal(el);
    });
  };
  scrollEl.addEventListener(
    'scroll',
    () => {
      if (!sweepQueued) {
        sweepQueued = true;
        requestAnimationFrame(sweep);
      }
    },
    { passive: true },
  );
}

/** TAMBAHAN: detail proyek — bar progres baca + parallax hero saat panel di-scroll. */
function wireScrollEffects(panel: HTMLElement, scrollEl: HTMLElement): void {
  const fill = panel.querySelector<HTMLElement>('.pd-progress-fill');
  const heroInner = panel.querySelector<HTMLElement>('.pd-hero-media-inner');
  let ticking = false;

  const update = () => {
    ticking = false;
    const max = scrollEl.scrollHeight - scrollEl.clientHeight;
    const percent = max > 0 ? (scrollEl.scrollTop / max) * 100 : 0;
    if (fill) fill.style.width = `${percent.toFixed(2)}%`;
    if (heroInner && !REDUCED_MOTION) {
      heroInner.style.transform = `translateY(${scrollEl.scrollTop * 0.35}px)`;
    }
  };

  scrollEl.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/** TAMBAHAN: detail proyek — swipe turun untuk menutup detail. */
function wireSwipeClose(panel: HTMLElement, scrollEl: HTMLElement): void {
  let startY = 0;
  let dragging = false;

  scrollEl.addEventListener(
    'touchstart',
    (e) => {
      if (scrollEl.scrollTop <= 0) {
        startY = e.touches[0].clientY;
        dragging = true;
      }
    },
    { passive: true },
  );

  scrollEl.addEventListener(
    'touchmove',
    (e) => {
      if (!dragging) return;
      const dy = e.touches[0].clientY - startY;
      if (dy > 0) {
        panel.style.transition = 'none';
        panel.style.transform = `translateY(${dy}px)`;
      }
    },
    { passive: true },
  );

  scrollEl.addEventListener('touchend', (e) => {
    if (!dragging) return;
    dragging = false;
    const dy = (e.changedTouches[0]?.clientY ?? startY) - startY;
    if (dy > 130) {
      closeDetail();
    } else {
      panel.style.transition = 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
      panel.style.transform = '';
    }
  });
}

/** TAMBAHAN: detail proyek — fokus keyboard terkurung di dalam dialog. */
function wireFocusTrap(): void {
  const selector = 'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])';

  keydownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDetail();
      return;
    }
    if (e.key !== 'Tab' || !activePanel) return;

    const items = Array.from(activePanel.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => el.offsetParent !== null,
    );
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  document.addEventListener('keydown', keydownHandler);
}

/** TAMBAHAN: detail proyek — pasang semua interaksi pada sebuah panel. */
function wirePanel(panel: HTMLElement, index: number): void {
  const scrollEl = panel.querySelector<HTMLElement>('.pd-scroll');
  const closeBtn = panel.querySelector<HTMLElement>('.pd-close');
  const nextBtn = panel.querySelector<HTMLElement>('.pd-next');

  closeBtn?.addEventListener('click', closeDetail);
  wireScrollEffects(panel, scrollEl!);
  wireReveal(panel, scrollEl!);
  wireGallery(panel);
  wireSwipeClose(panel, scrollEl!);
  wireFocusTrap();

  // Proyek Berikutnya: panel lama bergeser keluar, panel baru masuk
  nextBtn?.addEventListener('click', () => {
    const nextIndex = (index + 1) % projectsData.length;
    const nextPanel = buildPanel(nextIndex);

    if (REDUCED_MOTION) {
      panel.remove();
      document.body.appendChild(nextPanel);
      nextPanel.classList.add('is-mounted', 'is-open');
      activePanel = nextPanel;
      currentIndex = nextIndex;
      wirePanel(nextPanel, nextIndex);
      nextPanel.querySelector<HTMLElement>('.pd-scroll')?.scrollTo({ top: 0 });
      nextPanel.querySelector<HTMLElement>('.pd-close')?.focus();
      return;
    }

    panel.classList.add('pd-leaving');
    document.body.appendChild(nextPanel);
    nextPanel.classList.add('is-mounted', 'pd-entering');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        nextPanel.classList.remove('pd-entering');
        nextPanel.classList.add('is-open');
      });
    });

    window.setTimeout(() => {
      panel.remove();
    }, 360);

    activePanel = nextPanel;
    currentIndex = nextIndex;
    wirePanel(nextPanel, nextIndex);
    nextPanel.querySelector<HTMLElement>('.pd-scroll')?.scrollTo({ top: 0 });
    nextPanel.querySelector<HTMLElement>('.pd-close')?.focus();
  });
}

/** TAMBAHAN: detail proyek — buat elemen panel (belum dilempar ke DOM). */
function buildPanel(index: number): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'project-detail';
  wrapper.innerHTML = buildPanelHtml(index);
  return wrapper;
}

/**
 * TAMBAHAN: detail proyek — buka halaman detail proyek.
 * Dipanggil dari tombol "PELAJARI KASUS" pada kartu proyek.
 */
export function openProjectDetail(id: string, trigger?: HTMLElement): void {
  if (activePanel) return;

  const index = projectsData.findIndex((project) => project.id === id);
  if (index < 0 || !projectDetailsData[index]) return;

  currentIndex = index;
  lastTrigger = trigger ?? null;
  savedScrollY = window.scrollY;

  const panel = buildPanel(index);
  document.body.appendChild(panel);
  panel.classList.add('is-mounted');

  // kunci scroll halaman utama + simpan posisi untuk dikembalikan nanti
  document.body.classList.add('detail-open');
  document.documentElement.style.overflow = 'hidden';

  // ukur posisi kartu asal (FIRST) lalu posisi panel (LAST) untuk FLIP
  const card = trigger?.closest<HTMLElement>('[data-project-card]') ?? null;
  const firstRect = card?.getBoundingClientRect() ?? null;

  const panelEl = panel.querySelector<HTMLElement>('.pd-panel');
  const lastRect = panelEl?.getBoundingClientRect() ?? null;

  if (!REDUCED_MOTION && firstRect && lastRect && panelEl) {
    const dx = firstRect.left - lastRect.left;
    const dy = firstRect.top - lastRect.top;
    const sx = firstRect.width / lastRect.width;
    const sy = firstRect.height / lastRect.height;

    panelEl.style.transformOrigin = 'top left';
    panelEl.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    panelEl.getBoundingClientRect(); // force reflow supaya transisi jalan

    panelEl.style.transition = `transform ${isMobileViewport() ? 380 : 520}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    panelEl.style.transform = '';
  }

  panel.classList.add('is-open');
  activePanel = panel;

  wirePanel(panel, index);

  // fokus keyboard masuk ke detail
  requestAnimationFrame(() => {
    panelEl?.focus();
  });
}

/** TAMBAHAN: detail proyek — tutup detail dengan animasi kebalikan (FLIP keluar). */
export function closeDetail(): void {
  const panel = activePanel;
  if (!panel) return;

  activePanel = null;
  const index = currentIndex;
  const panelEl = panel.querySelector<HTMLElement>('.pd-panel');

  panel.classList.add('is-closing');
  panel.classList.remove('is-open');

  const finish = () => {
    panel.remove();
    document.body.classList.remove('detail-open');
    document.documentElement.style.overflow = '';
    // kembalikan posisi scroll halaman utama
    window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior });
    // fokus kembali ke kartu yang membuka detail (tanpa menggeser halaman)
    lastTrigger?.focus({ preventScroll: true });
    if (keydownHandler) {
      document.removeEventListener('keydown', keydownHandler);
      keydownHandler = null;
    }
  };

  const card = document.querySelector<HTMLElement>(`[data-project-card="${projectsData[index]?.id}"]`);
  const cardRect = card?.getBoundingClientRect() ?? null;
  const firstRect = panelEl?.getBoundingClientRect() ?? null;

  if (!REDUCED_MOTION && cardRect && firstRect && panelEl) {
    const dx = cardRect.left - firstRect.left;
    const dy = cardRect.top - firstRect.top;
    const sx = cardRect.width / firstRect.width;
    const sy = cardRect.height / firstRect.height;

    panelEl.style.transition = `transform ${isMobileViewport() ? 320 : 420}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    panelEl.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    window.setTimeout(finish, isMobileViewport() ? 340 : 440);
  } else {
    window.setTimeout(finish, 180);
  }
}
