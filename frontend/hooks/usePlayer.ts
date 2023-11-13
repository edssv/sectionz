import { create } from 'zustand';

interface PlayerStore {
  ids: number[];
  activeId?: number;
  volume: number;
  isMuted: boolean;
  isPlaying: boolean;
  setId: (id: number) => void;
  setIds: (ids: number[]) => void;
  setVolume: (volume: number) => void;
  setIsMuted: (isMuted: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  reset: () => void;
}

export const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  volume: 5,
  isMuted: false,
  isPlaying: false,
  setId: (id: number) => set({ activeId: id }),
  setIds: (ids: number[]) => set({ ids }),
  setVolume: (volume: number) => set({ volume }),
  setIsMuted: (isMuted: boolean) => set({ isMuted }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  reset: () => set({ ids: [], activeId: undefined })
}));
