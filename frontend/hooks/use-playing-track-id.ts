import usePlayingTrack from './use-playing-track';

export default function usePlayingTrackID(): number | null {
  return usePlayingTrack()?.id ?? null;
}
