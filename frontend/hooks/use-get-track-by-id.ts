import { useEffect, useMemo, useState } from 'react';

import { useToast } from '@/components/ui/use-toast';
import type { Track } from '@/lib/interfaces/strapi-track';
import { TrackService } from '@/services/track/track.service';

export function useGetTrackById(id: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [track, setTrack] = useState<Track | undefined>(undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);

    const fetchSong = async () => {
      const { data } = await TrackService.getTrack(id);

      if (!data) {
        setIsLoading(false);
        return toast({ title: 'Не удалось загрузить трек', description: 'Попробуйте позднее' });
      }

      setTrack(data);
      setIsLoading(false);
    };

    fetchSong();
  }, [id, toast]);

  return useMemo(
    () => ({
      isLoading,
      track
    }),
    [isLoading, track]
  );
}
