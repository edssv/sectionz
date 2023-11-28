import type { Track } from '@/interfaces/strapi-track';
import { absoluteUrlStrapi } from '@/lib/utils';

export function useLoadTrackUrl(track: Track) {
  if (!track) {
    return '';
  }

  return absoluteUrlStrapi(track.attributes.audio.data.attributes.url);
}
