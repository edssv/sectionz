import { toast } from '@/components/ui/use-toast';
import type { TrackFragment } from '@/gql/types';

import { absoluteUrlStrapi } from './utils';

interface PlayerOptions {
  volume?: number;
  muted?: boolean;
}

class Player {
  private audio: HTMLAudioElement;

  private durationThresholdReached: boolean;

  private trackPlayCountUpdated: boolean;

  private track: TrackFragment | null;

  public threshold: number;

  constructor(options?: PlayerOptions) {
    const mergedOptions = {
      volume: 1,
      muted: false,
      ...options
    };

    this.audio = new Audio();
    this.track = null;

    this.audio.volume = mergedOptions.volume;
    this.audio.muted = mergedOptions.muted;

    this.threshold = 0.75;
    this.durationThresholdReached = false;

    this.trackPlayCountUpdated = false;
  }

  async play() {
    if (!this.audio.src)
      return toast({
        variant: 'destructive',
        title: 'Трек не найден',
        description: 'Не удалось найти трек или его файл.'
      });

    await this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
  }

  mute() {
    this.audio.muted = true;
  }

  unmute() {
    this.audio.muted = false;
  }

  getAudio() {
    return this.audio;
  }

  getCurrentTime() {
    return this.audio.currentTime;
  }

  getVolume() {
    return this.audio.volume;
  }

  setVolume(volume: number) {
    this.audio.volume = volume;
  }

  getTrack() {
    return this.track;
  }

  setTrack(track: TrackFragment) {
    this.track = track;
    this.audio.src = absoluteUrlStrapi(track.attributes.audio.data.attributes.url);

    // When we change song, need to update the thresholdReached and trackPlayCountUpdated indicators.
    this.durationThresholdReached = false;
    this.trackPlayCountUpdated = false;
  }

  setCurrentTime(currentTime: number) {
    this.audio.currentTime = currentTime;
  }

  setTrackPlayCountUpdated() {
    this.trackPlayCountUpdated = true;
  }

  isMuted() {
    return this.audio.muted;
  }

  isPaused() {
    return this.audio.paused;
  }

  isThresholdReached() {
    if (!this.durationThresholdReached && this.audio.currentTime >= this.audio.duration * this.threshold) {
      this.durationThresholdReached = true;
    }

    return this.durationThresholdReached;
  }

  isTrackPlayCountUpdated() {
    return this.trackPlayCountUpdated;
  }
}

const audioVolume = localStorage.getItem('audioVolume');
const audioMuted = localStorage.getItem('audioMuted');

export default new Player({
  volume: audioVolume ? JSON.parse(audioVolume) : 1,
  muted: audioMuted ? JSON.parse(audioMuted) : false
});
