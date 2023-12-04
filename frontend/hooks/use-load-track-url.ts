import type { Track } from '@/lib/interfaces/strapi-track';
import { absoluteUrlStrapi } from '@/lib/utils';

export function useLoadTrackUrl(track: Track) {
  if (!track) {
    return '';
  }

  return absoluteUrlStrapi(track.attributes.audio.data.attributes.url);
}
