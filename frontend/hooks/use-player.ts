import { create } from 'zustand';

interface PlayerStore {
  ids: number[];
  activeId?: number;
  volume: number;
  duration: number;
  currentTime: number;
  activeAlbumId: number | undefined;
  isMuted: boolean;
  isPlaying: boolean;
  isShownVolumeController: boolean;
  setId: (id: number) => void;
  setIds: (ids: number[]) => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (currentTime: number) => void;
  setDuration: (duration: number) => void;
  setActiveAlbumId: (albumId: number) => void;
  setIsMuted: (isMuted: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsShownVolumeController: (isShownVolumeController: boolean) => void;
  reset: () => void;
}

export const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  volume: 3,
  duration: 0,
  currentTime: 0,
  activeAlbumId: undefined,
  isMuted: false,
  isPlaying: false,
  isShownVolumeController: false,
  setId: (id: number) => set({ activeId: id }),
  setIds: (ids: number[]) => set({ ids }),
  setVolume: (volume: number) => set({ volume }),
  setDuration: (duration: number) => set({ duration }),
  setCurrentTime: (currentTime: number) => set({ currentTime }),
  setActiveAlbumId: (albumId: number) => set({ activeAlbumId: albumId }),
  setIsMuted: (isMuted: boolean) => set({ isMuted }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setIsShownVolumeController: (isShownVolumeController: boolean) => set({ isShownVolumeController }),
  reset: () => set({ ids: [], activeId: undefined })
}));
