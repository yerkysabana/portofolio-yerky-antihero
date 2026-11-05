import { useEffect } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

/** Deteksi Konami code (↑ ↑ ↓ ↓ ← → ← → B A). */
export function useKonamiCode(onTrigger: () => void): void {
  useEffect(() => {
    let pointer = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const expected = KONAMI_SEQUENCE[pointer].toLowerCase();
      if (key === expected) {
        pointer += 1;
        if (pointer === KONAMI_SEQUENCE.length) {
          pointer = 0;
          onTrigger();
        }
      } else {
        pointer = 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onTrigger]);
}
