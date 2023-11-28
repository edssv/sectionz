export const getPublicUrl = {
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
  terms() {
    return '/terms';
  },
  album(albumId: number) {
    return `/album/${albumId}`;
  },
  artist(artistId: number) {
    return `/artist/${artistId}`;
  },
  browse() {
    return '/browse';
  },
  search(query?: string) {
    return `/search/${query}`;
  }
};
