/**
 * Sound FX sintetis via Web Audio API (tanpa file eksternal).
 * Singleton module-level agar semua komponen berbagi state yang sama.
 */

type Listener = (enabled: boolean) => void;

let audioCtx: AudioContext | null = null;
let enabled = false;
const listeners = new Set<Listener>();

export function isSoundEnabled(): boolean {
  return enabled;
}

export function setSoundEnabled(value: boolean): void {
  enabled = value;
  listeners.forEach((l) => l(value));
}

export function subscribeSound(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function initAudio(): void {
  if (!audioCtx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (Ctor) audioCtx = new Ctor();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    void audioCtx.resume();
  }
}

export function playTone(freq: number, type: OscillatorType = 'sine', duration = 0.1, gainVal = 0.15): void {
  if (!enabled) return;
  initAudio();
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    /* audio gagal diabaikan */
  }
}

export function playBoomSound(): void {
  if (!enabled) return;
  playTone(90, 'sawtooth', 0.25, 0.3);
  setTimeout(() => playTone(50, 'triangle', 0.35, 0.25), 50);
}

export function playSlashSound(): void {
  if (!enabled) return;
  playTone(850, 'sawtooth', 0.08, 0.15);
  setTimeout(() => playTone(300, 'sine', 0.1, 0.12), 40);
}

export function playScoreSound(): void {
  if (!enabled) return;
  playTone(523.25, 'sine', 0.08, 0.15);
  setTimeout(() => playTone(659.25, 'sine', 0.12, 0.15), 60);
}
