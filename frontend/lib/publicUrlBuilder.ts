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
  register() {
    return '/register';
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
