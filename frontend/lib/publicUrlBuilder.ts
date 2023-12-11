export const getPublicUrl = {
  album(albumId: number) {
    return `/album/${albumId}`;
  },
  artist(artistId: number) {
    return `/artist/${artistId}`;
  },
  browse() {
    return '/browse';
  },
  home() {
    return '/';
  },
  login() {
    return '/login';
  },

  passwordReset() {
    return '/password-reset';
  },
  privacy() {
    return '/privacy';
  },
  profile(id: number | string) {
    return `/user/${id}`;
  },
  queue() {
    return '/queue';
  },
  register() {
    return '/register';
  },
  terms() {
    return '/terms';
  },
  search(query?: string) {
    return `/search/${query}`;
  },
  settings() {
    return `/settings`;
  }
};
