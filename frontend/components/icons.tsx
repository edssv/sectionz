import {
  ArrowRightIcon,
  FileIcon,
  FileTextIcon,
  QuestionMarkCircledIcon,
  ImageIcon,
  LaptopIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TrashIcon,
  Share2Icon,
  PinTopIcon,
  ClockIcon,
  AvatarIcon,
  DotsHorizontalIcon
} from '@radix-ui/react-icons';
import {
  Loader2,
  X,
  User,
  Settings,
  PlayIcon,
  Command,
  Eye,
  PauseIcon,
  SearchIcon,
  Volume2,
  VolumeX,
  PlayCircleIcon,
  LayoutGridIcon,
  ListMusicIcon,
  Music2Icon,
  Mic2Icon,
  LibraryIcon,
  ListPlusIcon,
  HomeIcon,
  ChevronLeft,
  AlertCircleIcon,
  CalendarDaysIcon,
  ExternalLinkIcon,
  BellIcon,
  ShieldIcon,
  Tv2Icon,
  AlbumIcon,
  Shuffle,
  Repeat,
  Repeat1,
  ListOrdered
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export const Icons = {
  add: PlusIcon,
  album: AlbumIcon,
  arrowRight: ArrowRightIcon,
  avatar: AvatarIcon,
  bell: BellIcon,
  browse: LayoutGridIcon,
  calendar: CalendarDaysIcon,
  chevronLeft: ChevronLeft,
  clock: ClockIcon,
  close: X,
  dotsHorizontal: DotsHorizontalIcon,
  eyeOpen: Eye,
  externalLink: ExternalLinkIcon,
  help: QuestionMarkCircledIcon,
  home: HomeIcon,
  laptop: LaptopIcon,
  library: LibraryIcon,
  listPlus: ListPlusIcon,
  logo: Command,
  media: ImageIcon,
  mic: Mic2Icon,
  moon: MoonIcon,
  page: FileIcon,
  pinTop: PinTopIcon,
  playCircle: PlayCircleIcon,
  playlists: ListMusicIcon,
  post: FileTextIcon,
  queue: ListOrdered,
  repeat: Repeat,
  repeatOne: Repeat1,
  search: SearchIcon,
  settings: Settings,
  shuffle: Shuffle,
  share: Share2Icon,
  shieldCheck: ShieldIcon,
  songs: Music2Icon,
  speakerLoud: Volume2,
  speakerOff: VolumeX,
  spinner: Loader2,
  sun: SunIcon,
  trash: TrashIcon,
  tv: Tv2Icon,
  user: User,
  warning: AlertCircleIcon,

  heart: ({ ...props }: LucideProps) => (
    <svg aria-hidden='true' data-encore-id='icon' fill='currentColor' role='img' viewBox='0 0 16 16' {...props}>
      <path
        d='M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z'
        fill='currentColor'
      />
    </svg>
  ),
  heartFilled: ({ ...props }: LucideProps) => (
    <svg aria-hidden='true' data-encore-id='icon' fill='currentColor' role='img' viewBox='0 0 16 16' {...props}>
      <path
        d='M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z'
        fill='currentColor'
      />
    </svg>
  ),
  trackPrevious: ({ ...props }: LucideProps) => (
    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_0_1014)'>
        <path
          d='M3.3 1.20312C3.48565 1.20312 3.6637 1.27687 3.79497 1.40815C3.92625 1.53943 4 1.71747 4 1.90313V7.05312L13.95 1.30912C14.0564 1.2477 14.1771 1.21535 14.2999 1.21534C14.4228 1.21533 14.5435 1.24766 14.6499 1.30907C14.7563 1.37048 14.8447 1.45882 14.9061 1.5652C14.9676 1.67158 15 1.79227 15 1.91513V14.4901C15.0001 14.6131 14.9679 14.7339 14.9065 14.8404C14.8451 14.9469 14.7568 15.0354 14.6503 15.0969C14.5439 15.1585 14.4231 15.1909 14.3002 15.1909C14.1773 15.1909 14.0565 15.1586 13.95 15.0971L4 9.35213V14.5031C4 14.6888 3.92625 14.8668 3.79497 14.9981C3.6637 15.1294 3.48565 15.2031 3.3 15.2031H1.7C1.51435 15.2031 1.3363 15.1294 1.20503 14.9981C1.07375 14.8668 1 14.6888 1 14.5031V1.90313C1 1.71747 1.07375 1.53943 1.20503 1.40815C1.3363 1.27687 1.51435 1.20313 1.7 1.20312H3.3Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_0_1014'>
          <rect fill='currentColor' height='16' transform='translate(0 0.203125)' width='16' />
        </clipPath>
      </defs>
    </svg>
  ),
  trackNext: ({ ...props }: LucideProps) => (
    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_0_1022)'>
        <path
          d='M12.7 1.20312C12.5143 1.20312 12.3363 1.27687 12.205 1.40815C12.0738 1.53943 12 1.71747 12 1.90313V7.05312L2.05 1.31012C1.94368 1.24874 1.82308 1.2164 1.7003 1.21634C1.57753 1.21629 1.4569 1.24853 1.35053 1.30982C1.24415 1.37111 1.15576 1.45931 1.09424 1.56555C1.03271 1.6718 1.00021 1.79235 1 1.91513V14.4901C0.999863 14.6131 1.03211 14.7339 1.09349 14.8404C1.15487 14.9469 1.24322 15.0354 1.34966 15.0969C1.4561 15.1585 1.57686 15.1909 1.6998 15.1909C1.82275 15.1909 1.94353 15.1586 2.05 15.0971L12 9.35213V14.5031C12 14.6888 12.0738 14.8668 12.205 14.9981C12.3363 15.1294 12.5143 15.2031 12.7 15.2031H14.3C14.4857 15.2031 14.6637 15.1294 14.795 14.9981C14.9262 14.8668 15 14.6888 15 14.5031V1.90313C15 1.71747 14.9262 1.53943 14.795 1.40815C14.6637 1.27687 14.4857 1.20313 14.3 1.20312H12.7Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_0_1022'>
          <rect fill='currentColor' height='16' transform='translate(0 0.203125)' width='16' />
        </clipPath>
      </defs>
    </svg>
  ),
  play: ({ ...props }: LucideProps) => (
    <svg fill='currentColor' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_0_1018)'>
        <path
          d='M3 1.91611C2.99986 1.79317 3.03211 1.67236 3.09349 1.56584C3.15487 1.45932 3.24322 1.37084 3.34966 1.30931C3.4561 1.24778 3.57686 1.21537 3.6998 1.21533C3.82275 1.2153 3.94353 1.24764 4.05 1.30911L14.94 7.59711C15.0463 7.65858 15.1346 7.74693 15.1959 7.8533C15.2573 7.95967 15.2896 8.08031 15.2896 8.20311C15.2896 8.32592 15.2573 8.44656 15.1959 8.55293C15.1346 8.65929 15.0463 8.74765 14.94 8.80911L4.05 15.0971C3.9436 15.1585 3.82291 15.1909 3.70005 15.1909C3.5772 15.1909 3.4565 15.1586 3.35009 15.0972C3.24369 15.0358 3.15532 14.9474 3.09386 14.841C3.03241 14.7347 3.00004 14.614 3 14.4911V1.91611Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_0_1018'>
          <rect fill='currentColor' height='16' transform='translate(0 0.203125)' width='16' />
        </clipPath>
      </defs>
    </svg>
  ),
  pause: ({ ...props }: LucideProps) => (
    <svg fill='currentColor' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_0_1746)'>
        <path
          d='M2.7 1.20312C2.51435 1.20312 2.3363 1.27687 2.20503 1.40815C2.07375 1.53943 2 1.71747 2 1.90313V14.5031C2 14.6888 2.07375 14.8668 2.20503 14.9981C2.3363 15.1294 2.51435 15.2031 2.7 15.2031H5.3C5.48565 15.2031 5.6637 15.1294 5.79497 14.9981C5.92625 14.8668 6 14.6888 6 14.5031V1.90313C6 1.71747 5.92625 1.53943 5.79497 1.40815C5.6637 1.27687 5.48565 1.20313 5.3 1.20312H2.7ZM10.7 1.20312C10.5143 1.20312 10.3363 1.27687 10.205 1.40815C10.0738 1.53943 10 1.71747 10 1.90313V14.5031C10 14.6888 10.0738 14.8668 10.205 14.9981C10.3363 15.1294 10.5143 15.2031 10.7 15.2031H13.3C13.4857 15.2031 13.6637 15.1294 13.795 14.9981C13.9262 14.8668 14 14.6888 14 14.5031V1.90313C14 1.71747 13.9262 1.53943 13.795 1.40815C13.6637 1.27687 13.4857 1.20313 13.3 1.20312H10.7Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_0_1746'>
          <rect fill='currentColor' height='16' transform='translate(0 0.203125)' width='16' />
        </clipPath>
      </defs>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      data-icon='google'
      data-prefix='fab'
      focusable='false'
      role='img'
      viewBox='0 0 128 128'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z'
        fill='#fff'
      />
      <path
        d='M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z'
        fill='#e33629'
      />
      <path
        d='M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z'
        fill='#f8bd00'
      />
      <path
        d='M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z'
        fill='#587dbd'
      />
      <path
        d='M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z'
        fill='#319f43'
      />
    </svg>
  ),
  vk: ({ ...props }: LucideProps) => (
    <svg
      className='base-0-2-23'
      fill='#FFF'
      height='16'
      viewBox='0 0 16 16'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M1.12471 1.12471C0 2.24942 0 4.05961 0 7.68v.64c0 3.6204 0 5.4306 1.12471 6.5553C2.24942 16 4.05961 16 7.68 16h.64c3.6204 0 5.4306 0 6.5553-1.1247C16 13.7506 16 11.9404 16 8.32v-.64c0-3.62039 0-5.43058-1.1247-6.55529C13.7506 0 11.9404 0 8.32 0h-.64C4.05961 0 2.24942 0 1.12471 1.12471zM2.75 5c.08667 4.16 2.16665 6.66 5.81331 6.66h.20671V9.28c1.33998.13333 2.35328 1.1133 2.75988 2.38h1.8934c-.52-1.89333-1.8867-2.94-2.74-3.34.8533-.49333 2.0533-1.69333 2.34-3.32h-1.7201c-.3733 1.32-1.47985 2.51667-2.53318 2.63V5H7.04997v4.61C5.9833 9.34333 4.63666 8.05333 4.57666 5H2.75z'
        fillRule='evenodd'
      />
    </svg>
  ),
  ok: ({ ...props }: LucideProps) => (
    <svg
      aria-label='OK.ru'
      fill='#000000'
      height='24px'
      role='img'
      viewBox='0 0 512 512'
      width='24px'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
      <g id='SVGRepo_iconCarrier'>
        <rect fill='#EE8208' height='512' rx='15%' width='512' />
        <path
          d='M256 137a36.5 36.5 0 0136.5 36.5a36.5 36.5 0 01-36.5 36.5a36.5 36.5 0 01-36.5-36.5a36.5 36.5 0 0136.5-36.5zm0 124.5c48.6 0 88-39.5 88 -88s-39.5-88 -88 -88s-88 39.5-88 88s39.5 88 88 88m35.6 71.9a132.8 132.8 0 0051-21a25.8 25.8 0 008-35.6a25.8 25.8 0 00-35.6-8a111.9 111.9 0 01-118.6 0a25.8 25.8 0 00-35.6 8a25.8 25.8 0 008 35.6c15.9 10 33 17 51 21l-49 49.3a25.8 25.8 0 0036.5 36.5l48.4-48.5l48.4 48.4a25.8 25.8 0 0036.5 0a25.8 25.8 0 000-36.5l-49.3-49.3'
          fill='#ffffff'
        />
      </g>
    </svg>
  ),
  telegram: ({ ...props }: LucideProps) => (
    <svg fill='none' height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle cx='16' cy='16' fill='url(#paint0_linear_87_7225)' r='14' />
      <path
        d='M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z'
        fill='white'
      />
      <defs>
        <linearGradient gradientUnits='userSpaceOnUse' id='paint0_linear_87_7225' x1='16' x2='16' y1='2' y2='30'>
          <stop stopColor='#37BBFE' />
          <stop offset='1' stopColor='#007DBB' />
        </linearGradient>
      </defs>
    </svg>
  )
};
