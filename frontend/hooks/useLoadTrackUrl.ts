import type { Track } from '@/interfaces/strapi-track';
import { absoluteUrl } from '@/lib/utils';

export function useLoadTrackUrl(track: Track) {
  if (!track) {
    return '';
  }

  return absoluteUrl(track.attributes.audio.data.attributes.url);
}
