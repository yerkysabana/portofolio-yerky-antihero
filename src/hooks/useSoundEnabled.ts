import { useSyncExternalStore } from 'react';
import { isSoundEnabled, subscribeSound } from '../hooks/useSoundFx';

/** State on/off SFX yang dipakai tombol toggle di navbar. */
export function useSoundEnabled(): boolean {
  return useSyncExternalStore(subscribeSound, isSoundEnabled, isSoundEnabled);
}
