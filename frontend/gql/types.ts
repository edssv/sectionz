import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: number; output: number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Album = {
  __typename?: 'Album';
  albumType: Enum_Album_Albumtype;
  artist: Maybe<ArtistEntityResponse>;
  cover: UploadFileEntityResponse;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  duration: Scalars['Float']['output'];
  genre: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  releaseDate: Scalars['DateTime']['output'];
  tracks: Maybe<TrackRelationResponseCollection>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type AlbumTracksArgs = {
  filters: InputMaybe<TrackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AlbumEntity = {
  __typename?: 'AlbumEntity';
  attributes: Maybe<Album>;
  id: Maybe<Scalars['ID']['output']>;
};

export type AlbumEntityResponse = {
  __typename?: 'AlbumEntityResponse';
  data: Maybe<AlbumEntity>;
};

export type AlbumEntityResponseCollection = {
  __typename?: 'AlbumEntityResponseCollection';
  data: Array<AlbumEntity>;
  meta: ResponseCollectionMeta;
};

export type AlbumFiltersInput = {
  albumType: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<AlbumFiltersInput>>>;
  artist: InputMaybe<ArtistFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  duration: InputMaybe<FloatFilterInput>;
  genre: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<AlbumFiltersInput>;
  or: InputMaybe<Array<InputMaybe<AlbumFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  releaseDate: InputMaybe<DateTimeFilterInput>;
  tracks: InputMaybe<TrackFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type AlbumInput = {
  albumType: InputMaybe<Enum_Album_Albumtype>;
  artist: InputMaybe<Scalars['ID']['input']>;
  cover: InputMaybe<Scalars['ID']['input']>;
  duration: InputMaybe<Scalars['Float']['input']>;
  genre: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate: InputMaybe<Scalars['DateTime']['input']>;
  tracks: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type AlbumRelationResponseCollection = {
  __typename?: 'AlbumRelationResponseCollection';
  data: Array<AlbumEntity>;
};

export type Artist = {
  __typename?: 'Artist';
  albums: Maybe<AlbumRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  followers: Maybe<FollowingArtistRelationResponseCollection>;
  image: Maybe<UploadFileEntityResponse>;
  name: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  tracks: Maybe<TrackRelationResponseCollection>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ArtistAlbumsArgs = {
  filters: InputMaybe<AlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArtistFollowersArgs = {
  filters: InputMaybe<FollowingArtistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArtistTracksArgs = {
  filters: InputMaybe<TrackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArtistEntity = {
  __typename?: 'ArtistEntity';
  attributes: Maybe<Artist>;
  id: Maybe<Scalars['ID']['output']>;
};

export type ArtistEntityResponse = {
  __typename?: 'ArtistEntityResponse';
  data: Maybe<ArtistEntity>;
};

export type ArtistEntityResponseCollection = {
  __typename?: 'ArtistEntityResponseCollection';
  data: Array<ArtistEntity>;
  meta: ResponseCollectionMeta;
};

export type ArtistFiltersInput = {
  albums: InputMaybe<AlbumFiltersInput>;
  and: InputMaybe<Array<InputMaybe<ArtistFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  followers: InputMaybe<FollowingArtistFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ArtistFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ArtistFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  tracks: InputMaybe<TrackFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains: InputMaybe<Scalars['Boolean']['input']>;
  containsi: InputMaybe<Scalars['Boolean']['input']>;
  endsWith: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  eqi: InputMaybe<Scalars['Boolean']['input']>;
  gt: InputMaybe<Scalars['Boolean']['input']>;
  gte: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt: InputMaybe<Scalars['Boolean']['input']>;
  lte: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
  nei: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<BooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type CheckUserSavedAlbumsResponse = {
  __typename?: 'CheckUserSavedAlbumsResponse';
  albums: Maybe<Array<Maybe<SavedStatus>>>;
};

export type CheckUserSavedTracksResponse = {
  __typename?: 'CheckUserSavedTracksResponse';
  tracks: Maybe<Array<Maybe<SavedStatus>>>;
};

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains: InputMaybe<Scalars['DateTime']['input']>;
  containsi: InputMaybe<Scalars['DateTime']['input']>;
  endsWith: InputMaybe<Scalars['DateTime']['input']>;
  eq: InputMaybe<Scalars['DateTime']['input']>;
  eqi: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  ne: InputMaybe<Scalars['DateTime']['input']>;
  nei: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<DateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Album_Albumtype {
  Album = 'album',
  Single = 'single'
}

export enum Enum_Userspermissionsuser_Gender {
  Man = 'man',
  PreferNotToSay = 'prefer_not_to_say',
  SomethingElse = 'something_else',
  Woman = 'woman'
}

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains: InputMaybe<Scalars['Float']['input']>;
  containsi: InputMaybe<Scalars['Float']['input']>;
  endsWith: InputMaybe<Scalars['Float']['input']>;
  eq: InputMaybe<Scalars['Float']['input']>;
  eqi: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
  nei: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<FloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']['input']>;
  notContainsi: InputMaybe<Scalars['Float']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type FollowedStatus = {
  __typename?: 'FollowedStatus';
  isFollowed: Maybe<Scalars['Boolean']['output']>;
};

export type FollowingArtist = {
  __typename?: 'FollowingArtist';
  artist: Maybe<ArtistEntityResponse>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<UsersPermissionsUserEntityResponse>;
};

export type FollowingArtistEntity = {
  __typename?: 'FollowingArtistEntity';
  attributes: Maybe<FollowingArtist>;
  id: Maybe<Scalars['ID']['output']>;
};

export type FollowingArtistEntityResponse = {
  __typename?: 'FollowingArtistEntityResponse';
  data: Maybe<FollowingArtistEntity>;
};

export type FollowingArtistEntityResponseCollection = {
  __typename?: 'FollowingArtistEntityResponseCollection';
  data: Array<FollowingArtistEntity>;
  meta: ResponseCollectionMeta;
};

export type FollowingArtistFiltersInput = {
  and: InputMaybe<Array<InputMaybe<FollowingArtistFiltersInput>>>;
  artist: InputMaybe<ArtistFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<FollowingArtistFiltersInput>;
  or: InputMaybe<Array<InputMaybe<FollowingArtistFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type FollowingArtistRelationResponseCollection = {
  __typename?: 'FollowingArtistRelationResponseCollection';
  data: Array<FollowingArtistEntity>;
};

export type GenericMorph = Album | Artist | FollowingArtist | I18NLocale | SavedAlbum | SavedTrack | Track | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<I18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  containsi: InputMaybe<Scalars['ID']['input']>;
  endsWith: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  eqi: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  gte: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt: InputMaybe<Scalars['ID']['input']>;
  lte: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  nei: InputMaybe<Scalars['ID']['input']>;
  not: InputMaybe<IdFilterInput>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  notContainsi: InputMaybe<Scalars['ID']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains: InputMaybe<Scalars['Int']['input']>;
  containsi: InputMaybe<Scalars['Int']['input']>;
  endsWith: InputMaybe<Scalars['Int']['input']>;
  eq: InputMaybe<Scalars['Int']['input']>;
  eqi: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
  nei: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<IntFilterInput>;
  notContains: InputMaybe<Scalars['Int']['input']>;
  notContainsi: InputMaybe<Scalars['Int']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains: InputMaybe<Scalars['JSON']['input']>;
  containsi: InputMaybe<Scalars['JSON']['input']>;
  endsWith: InputMaybe<Scalars['JSON']['input']>;
  eq: InputMaybe<Scalars['JSON']['input']>;
  eqi: InputMaybe<Scalars['JSON']['input']>;
  gt: InputMaybe<Scalars['JSON']['input']>;
  gte: InputMaybe<Scalars['JSON']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt: InputMaybe<Scalars['JSON']['input']>;
  lte: InputMaybe<Scalars['JSON']['input']>;
  ne: InputMaybe<Scalars['JSON']['input']>;
  nei: InputMaybe<Scalars['JSON']['input']>;
  not: InputMaybe<JsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']['input']>;
  notContainsi: InputMaybe<Scalars['JSON']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createAlbum: Maybe<AlbumEntityResponse>;
  createFollowingArtist: FollowedStatus;
  createSavedAlbum: SavedStatus;
  createSavedTrack: SavedStatus;
  createTrack: Maybe<TrackEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAlbum: Maybe<AlbumEntityResponse>;
  deleteFollowingArtist: FollowedStatus;
  deleteSavedAlbum: SavedStatus;
  deleteSavedTrack: SavedStatus;
  deleteTrack: Maybe<TrackEntityResponse>;
  deleteUploadFile: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateAlbum: Maybe<AlbumEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateTrack: Maybe<TrackEntityResponse>;
  updateUploadFile: Maybe<UploadFileEntityResponse>;
  updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  updateUserNotifications: UsersPermissionsUserEntityResponse;
  updateUserProfile: UsersPermissionsUserEntityResponse;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAlbumArgs = {
  data: AlbumInput;
};


export type MutationCreateFollowingArtistArgs = {
  artistId: Scalars['ID']['input'];
};


export type MutationCreateSavedAlbumArgs = {
  albumId: Scalars['ID']['input'];
};


export type MutationCreateSavedTrackArgs = {
  trackId: Scalars['ID']['input'];
};


export type MutationCreateTrackArgs = {
  data: TrackInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFollowingArtistArgs = {
  artistId: Scalars['ID']['input'];
};


export type MutationDeleteSavedAlbumArgs = {
  albumId: Scalars['ID']['input'];
};


export type MutationDeleteSavedTrackArgs = {
  trackId: Scalars['ID']['input'];
};


export type MutationDeleteTrackArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAlbumArgs = {
  data: AlbumInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateTrackArgs = {
  data: TrackInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserNotificationsArgs = {
  data: InputMaybe<UpdateUserNotificationsInput>;
};


export type MutationUpdateUserProfileArgs = {
  data: InputMaybe<UpdateUserProfileInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  album: Maybe<AlbumEntityResponse>;
  albums: Maybe<AlbumEntityResponseCollection>;
  artist: Maybe<ArtistEntityResponse>;
  artists: Maybe<ArtistEntityResponseCollection>;
  checkUserSavedAlbums: Maybe<CheckUserSavedAlbumsResponse>;
  checkUserSavedTracks: Maybe<CheckUserSavedTracksResponse>;
  emailAvailable: Maybe<Scalars['Boolean']['output']>;
  followingArtist: Maybe<FollowingArtistEntityResponse>;
  followingArtists: Maybe<FollowingArtistEntityResponseCollection>;
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  savedAlbum: Maybe<SavedAlbumEntityResponse>;
  savedAlbums: Maybe<SavedAlbumEntityResponseCollection>;
  savedTrack: Maybe<SavedTrackEntityResponse>;
  savedTracks: Maybe<SavedTrackEntityResponseCollection>;
  track: Maybe<TrackEntityResponse>;
  trackIncrementPlayCount: TrackIncrementPlayCountResponse;
  tracks: Maybe<TrackEntityResponseCollection>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder: Maybe<UploadFolderEntityResponse>;
  uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  userTopItems: Maybe<Scalars['Boolean']['output']>;
  usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAlbumArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAlbumsArgs = {
  filters: InputMaybe<AlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArtistArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryArtistsArgs = {
  filters: InputMaybe<ArtistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCheckUserSavedAlbumsArgs = {
  albums: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryCheckUserSavedTracksArgs = {
  tracks: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryEmailAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QueryFollowingArtistArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFollowingArtistsArgs = {
  filters: InputMaybe<FollowingArtistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySavedAlbumArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySavedAlbumsArgs = {
  filters: InputMaybe<SavedAlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySavedTrackArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySavedTracksArgs = {
  filters: InputMaybe<SavedTrackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTrackArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTrackIncrementPlayCountArgs = {
  trackId: Scalars['ID']['input'];
};


export type QueryTracksArgs = {
  filters: InputMaybe<TrackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SavedAlbum = {
  __typename?: 'SavedAlbum';
  album: Maybe<AlbumEntityResponse>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<UsersPermissionsUserEntityResponse>;
};

export type SavedAlbumEntity = {
  __typename?: 'SavedAlbumEntity';
  attributes: Maybe<SavedAlbum>;
  id: Maybe<Scalars['ID']['output']>;
};

export type SavedAlbumEntityResponse = {
  __typename?: 'SavedAlbumEntityResponse';
  data: Maybe<SavedAlbumEntity>;
};

export type SavedAlbumEntityResponseCollection = {
  __typename?: 'SavedAlbumEntityResponseCollection';
  data: Array<SavedAlbumEntity>;
  meta: ResponseCollectionMeta;
};

export type SavedAlbumFiltersInput = {
  album: InputMaybe<AlbumFiltersInput>;
  and: InputMaybe<Array<InputMaybe<SavedAlbumFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<SavedAlbumFiltersInput>;
  or: InputMaybe<Array<InputMaybe<SavedAlbumFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type SavedAlbumRelationResponseCollection = {
  __typename?: 'SavedAlbumRelationResponseCollection';
  data: Array<SavedAlbumEntity>;
};

export type SavedStatus = {
  __typename?: 'SavedStatus';
  isSaved: Maybe<Scalars['Boolean']['output']>;
};

export type SavedTrack = {
  __typename?: 'SavedTrack';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  track: Maybe<TrackEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<UsersPermissionsUserEntityResponse>;
};

export type SavedTrackEntity = {
  __typename?: 'SavedTrackEntity';
  attributes: Maybe<SavedTrack>;
  id: Maybe<Scalars['ID']['output']>;
};

export type SavedTrackEntityResponse = {
  __typename?: 'SavedTrackEntityResponse';
  data: Maybe<SavedTrackEntity>;
};

export type SavedTrackEntityResponseCollection = {
  __typename?: 'SavedTrackEntityResponseCollection';
  data: Array<SavedTrackEntity>;
  meta: ResponseCollectionMeta;
};

export type SavedTrackFiltersInput = {
  and: InputMaybe<Array<InputMaybe<SavedTrackFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<SavedTrackFiltersInput>;
  or: InputMaybe<Array<InputMaybe<SavedTrackFiltersInput>>>;
  track: InputMaybe<TrackFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type SavedTrackRelationResponseCollection = {
  __typename?: 'SavedTrackRelationResponseCollection';
  data: Array<SavedTrackEntity>;
};

export type StringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  containsi: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  eqi: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  nei: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<StringFilterInput>;
  notContains: InputMaybe<Scalars['String']['input']>;
  notContainsi: InputMaybe<Scalars['String']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Track = {
  __typename?: 'Track';
  album: Maybe<AlbumEntityResponse>;
  artist: Maybe<ArtistEntityResponse>;
  audio: UploadFileEntityResponse;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  genre: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  playCount: Maybe<Scalars['Int']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TrackEntity = {
  __typename?: 'TrackEntity';
  attributes: Maybe<Track>;
  id: Maybe<Scalars['ID']['output']>;
};

export type TrackEntityResponse = {
  __typename?: 'TrackEntityResponse';
  data: Maybe<TrackEntity>;
};

export type TrackEntityResponseCollection = {
  __typename?: 'TrackEntityResponseCollection';
  data: Array<TrackEntity>;
  meta: ResponseCollectionMeta;
};

export type TrackFiltersInput = {
  album: InputMaybe<AlbumFiltersInput>;
  and: InputMaybe<Array<InputMaybe<TrackFiltersInput>>>;
  artist: InputMaybe<ArtistFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  duration: InputMaybe<FloatFilterInput>;
  genre: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<TrackFiltersInput>;
  or: InputMaybe<Array<InputMaybe<TrackFiltersInput>>>;
  playCount: InputMaybe<IntFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type TrackIncrementPlayCountResponse = {
  __typename?: 'TrackIncrementPlayCountResponse';
  playCount: Scalars['Int']['output'];
};

export type TrackInput = {
  album: InputMaybe<Scalars['ID']['input']>;
  artist: InputMaybe<Scalars['ID']['input']>;
  audio: InputMaybe<Scalars['ID']['input']>;
  duration: InputMaybe<Scalars['Float']['input']>;
  genre: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  playCount: InputMaybe<Scalars['Int']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type TrackRelationResponseCollection = {
  __typename?: 'TrackRelationResponseCollection';
  data: Array<TrackEntity>;
};

export type UpdateUserNotificationsInput = {
  communicationEmails: InputMaybe<Scalars['Boolean']['input']>;
  marketingEmails: InputMaybe<Scalars['Boolean']['input']>;
  socialEmails: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateUserProfileInput = {
  dob: InputMaybe<Scalars['DateTime']['input']>;
  gender: InputMaybe<Enum_Userspermissionsuser_Gender>;
  profileName: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  ext: Maybe<Scalars['String']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  ext: InputMaybe<StringFilterInput>;
  folder: InputMaybe<UploadFolderFiltersInput>;
  folderPath: InputMaybe<StringFilterInput>;
  formats: InputMaybe<JsonFilterInput>;
  hash: InputMaybe<StringFilterInput>;
  height: InputMaybe<IntFilterInput>;
  id: InputMaybe<IdFilterInput>;
  mime: InputMaybe<StringFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  provider_metadata: InputMaybe<JsonFilterInput>;
  size: InputMaybe<FloatFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  url: InputMaybe<StringFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  ext: InputMaybe<Scalars['String']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
  folderPath: InputMaybe<Scalars['String']['input']>;
  formats: InputMaybe<Scalars['JSON']['input']>;
  hash: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  mime: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  previewUrl: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children: Maybe<UploadFolderRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  files: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes: Maybe<UploadFolder>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children: InputMaybe<UploadFolderFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  files: InputMaybe<UploadFileFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFolderFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent: InputMaybe<UploadFolderFiltersInput>;
  path: InputMaybe<StringFilterInput>;
  pathId: InputMaybe<IntFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  parent: InputMaybe<Scalars['ID']['input']>;
  path: InputMaybe<Scalars['String']['input']>;
  pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']['output']>;
  communicationEmails: Scalars['Boolean']['output'];
  confirmed: Maybe<Scalars['Boolean']['output']>;
  dob: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  gender: Maybe<Enum_Userspermissionsuser_Gender>;
  id: Scalars['ID']['output'];
  image: Maybe<UploadFile>;
  marketingEmails: Scalars['Boolean']['output'];
  profileName: Maybe<Scalars['String']['output']>;
  role: Maybe<UsersPermissionsMeRole>;
  savedAlbums: Maybe<Array<Maybe<SavedAlbum>>>;
  savedTracks: Maybe<Array<Maybe<SavedTrack>>>;
  socialEmails: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  dob: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  gender: Enum_Userspermissionsuser_Gender;
  marketingEmails: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  profileName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type: InputMaybe<Scalars['String']['input']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']['output']>;
  communicationEmails: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  dob: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  followingArtists: Maybe<FollowingArtistRelationResponseCollection>;
  gender: Maybe<Enum_Userspermissionsuser_Gender>;
  image: Maybe<UploadFileEntityResponse>;
  marketingEmails: Maybe<Scalars['Boolean']['output']>;
  profileName: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  savedAlbums: Maybe<SavedAlbumRelationResponseCollection>;
  savedTracks: Maybe<SavedTrackRelationResponseCollection>;
  socialEmails: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Maybe<Scalars['String']['output']>;
};


export type UsersPermissionsUserFollowingArtistsArgs = {
  filters: InputMaybe<FollowingArtistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserSavedAlbumsArgs = {
  filters: InputMaybe<SavedAlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserSavedTracksArgs = {
  filters: InputMaybe<SavedTrackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<BooleanFilterInput>;
  communicationEmails: InputMaybe<BooleanFilterInput>;
  confirmationToken: InputMaybe<StringFilterInput>;
  confirmed: InputMaybe<BooleanFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  dob: InputMaybe<DateTimeFilterInput>;
  email: InputMaybe<StringFilterInput>;
  followingArtists: InputMaybe<FollowingArtistFiltersInput>;
  gender: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  marketingEmails: InputMaybe<BooleanFilterInput>;
  not: InputMaybe<UsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password: InputMaybe<StringFilterInput>;
  profileName: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  resetPasswordToken: InputMaybe<StringFilterInput>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  savedAlbums: InputMaybe<SavedAlbumFiltersInput>;
  savedTracks: InputMaybe<SavedTrackFiltersInput>;
  socialEmails: InputMaybe<BooleanFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>;
  communicationEmails: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken: InputMaybe<Scalars['String']['input']>;
  confirmed: InputMaybe<Scalars['Boolean']['input']>;
  dob: InputMaybe<Scalars['DateTime']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  followingArtists: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  gender: InputMaybe<Enum_Userspermissionsuser_Gender>;
  image: InputMaybe<Scalars['ID']['input']>;
  marketingEmails: InputMaybe<Scalars['Boolean']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  profileName: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  savedAlbums: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  savedTracks: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  socialEmails: InputMaybe<Scalars['Boolean']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AlbumPreviewFragment = { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', attributes: { __typename?: 'Artist', name: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number }> } } };

export type AlbumFragment = { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, genre: string, albumType: Enum_Album_Albumtype, duration: number, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } } } };

export type CheckUserSavedAlbumsQueryVariables = Exact<{
  albums: Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>;
}>;


export type CheckUserSavedAlbumsQuery = { __typename?: 'Query', checkUserSavedAlbums: { __typename?: 'CheckUserSavedAlbumsResponse', albums: Array<{ __typename?: 'SavedStatus', isSaved: boolean }> } };

export type GetAlbumTracksQueryVariables = Exact<{
  albumId: Scalars['ID']['input'];
}>;


export type GetAlbumTracksQuery = { __typename?: 'Query', album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', attributes: { __typename?: 'Album', tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } } } } };

export type GetAlbumQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAlbumQuery = { __typename?: 'Query', album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, genre: string, albumType: Enum_Album_Albumtype, duration: number, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } } } } } };

export type GetSeveralAlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeveralAlbumsQuery = { __typename?: 'Query', albums: { __typename?: 'AlbumEntityResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', attributes: { __typename?: 'Artist', name: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number }> } } }> } };

export type GetUserSavedAlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSavedAlbumsQuery = { __typename?: 'Query', me: { __typename?: 'UsersPermissionsMe', savedAlbums: Array<{ __typename?: 'SavedAlbum', createdAt: any, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', attributes: { __typename?: 'Artist', name: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number }> } } } } }> } };

export type RemoveUserSavedAlbumMutationVariables = Exact<{
  albumId: Scalars['ID']['input'];
}>;


export type RemoveUserSavedAlbumMutation = { __typename?: 'Mutation', deleteSavedAlbum: { __typename?: 'SavedStatus', isSaved: boolean } };

export type SaveAlbumForCurrentUserMutationVariables = Exact<{
  albumId: Scalars['ID']['input'];
}>;


export type SaveAlbumForCurrentUserMutation = { __typename?: 'Mutation', createSavedAlbum: { __typename?: 'SavedStatus', isSaved: boolean } };

export type ArtistPreviewFragment = { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } };

export type ArtistFragment = { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, albums: { __typename?: 'AlbumRelationResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, genre: string, albumType: Enum_Album_Albumtype, duration: number, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } } } }> }, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } };

export type GetArtistAlbumsQueryVariables = Exact<{
  artistId: Scalars['ID']['input'];
}>;


export type GetArtistAlbumsQuery = { __typename?: 'Query', artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', attributes: { __typename?: 'Artist', albums: { __typename?: 'AlbumRelationResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', attributes: { __typename?: 'Artist', name: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number }> } } }> } } } } };

export type GetArtistTopTracksQueryVariables = Exact<{
  artistId: Scalars['ID']['input'];
}>;


export type GetArtistTopTracksQuery = { __typename?: 'Query', topTracks: { __typename?: 'TrackEntityResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } };

export type GetArtistQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetArtistQuery = { __typename?: 'Query', artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, albums: { __typename?: 'AlbumRelationResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', attributes: { __typename?: 'Artist', name: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number }> } } }> }, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, topTracks: { __typename?: 'TrackEntityResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } };

export type GetSeveralArtistsQueryVariables = Exact<{
  filters: InputMaybe<ArtistFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetSeveralArtistsQuery = { __typename?: 'Query', artists: { __typename?: 'ArtistEntityResponseCollection', data: Array<{ __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } }> } };

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename: 'UsersPermissionsLoginPayload' } };

export type EmailAvailableQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type EmailAvailableQuery = { __typename?: 'Query', emailAvailable: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'UsersPermissionsPasswordPayload', ok: boolean } };

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt: string, user: { __typename?: 'UsersPermissionsMe', id: number, username: string, email: string } } };

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt: string, user: { __typename?: 'UsersPermissionsMe', id: number, username: string, email: string } } };

export type ResetPasswordMutationVariables = Exact<{
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename: 'UsersPermissionsLoginPayload', user: { __typename?: 'UsersPermissionsMe', email: string } } };

export type CheckUserSavedTracksQueryVariables = Exact<{
  tracks: Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>;
}>;


export type CheckUserSavedTracksQuery = { __typename?: 'Query', checkUserSavedTracks: { __typename?: 'CheckUserSavedTracksResponse', tracks: Array<{ __typename?: 'SavedStatus', isSaved: boolean }> } };

export type GetSeveralTracksQueryVariables = Exact<{
  filters: InputMaybe<TrackFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetSeveralTracksQuery = { __typename?: 'Query', tracks: { __typename?: 'TrackEntityResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } };

export type GetTrackQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTrackQuery = { __typename?: 'Query', track: { __typename?: 'TrackEntityResponse', data: { __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } } } };

export type GetUserSavedTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSavedTracksQuery = { __typename?: 'Query', me: { __typename?: 'UsersPermissionsMe', savedTracks: Array<{ __typename?: 'SavedTrack', createdAt: any, track: { __typename?: 'TrackEntityResponse', data: { __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } } } }> } };

export type TrackIncrementPlayCountQueryVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type TrackIncrementPlayCountQuery = { __typename?: 'Query', trackIncrementPlayCount: { __typename?: 'TrackIncrementPlayCountResponse', playCount: number } };

export type RemoveUserSavedTrackMutationVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type RemoveUserSavedTrackMutation = { __typename?: 'Mutation', deleteSavedTrack: { __typename?: 'SavedStatus', isSaved: boolean } };

export type SaveTrackForCurrentUserMutationVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type SaveTrackForCurrentUserMutation = { __typename?: 'Mutation', createSavedTrack: { __typename?: 'SavedStatus', isSaved: boolean } };

export type SavedTrackFragment = { __typename?: 'SavedTrack', createdAt: any, track: { __typename?: 'TrackEntityResponse', data: { __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } } } };

export type TrackFragment = { __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } };

export type FollowArtistMutationVariables = Exact<{
  artistId: Scalars['ID']['input'];
}>;


export type FollowArtistMutation = { __typename?: 'Mutation', createFollowingArtist: { __typename?: 'FollowedStatus', isFollowed: boolean } };

export type GetCurrentUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserProfileQuery = { __typename?: 'Query', me: { __typename?: 'UsersPermissionsMe', id: number, username: string, email: string, profileName: string, dob: any, gender: Enum_Userspermissionsuser_Gender, marketingEmails: boolean, communicationEmails: boolean, socialEmails: boolean, image: { __typename?: 'UploadFile', url: string } } };

export type GetUserTopItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserTopItemsQuery = { __typename?: 'Query', userTopItems: boolean };

export type MeFragment = { __typename?: 'UsersPermissionsMe', id: number, username: string, email: string, profileName: string, dob: any, gender: Enum_Userspermissionsuser_Gender, marketingEmails: boolean, communicationEmails: boolean, socialEmails: boolean, image: { __typename?: 'UploadFile', url: string } };

export type UnfollowArtistMutationVariables = Exact<{
  artistId: Scalars['ID']['input'];
}>;


export type UnfollowArtistMutation = { __typename?: 'Mutation', deleteFollowingArtist: { __typename?: 'FollowedStatus', isFollowed: boolean } };

export type UpdateUserNotificationsMutationVariables = Exact<{
  data: InputMaybe<UpdateUserNotificationsInput>;
}>;


export type UpdateUserNotificationsMutation = { __typename?: 'Mutation', updateUserNotifications: { __typename: 'UsersPermissionsUserEntityResponse' } };

export type UpdateUserProfileMutationVariables = Exact<{
  data: UpdateUserProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename: 'UsersPermissionsUserEntityResponse' } };

export type UserFragment = { __typename?: 'UsersPermissionsUserEntity', id: number, attributes: { __typename?: 'UsersPermissionsUser', username: string, profileName: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } };

export const AlbumPreviewFragmentDoc = gql`
    fragment AlbumPreview on AlbumEntity {
  id
  attributes {
    name
    cover {
      data {
        attributes {
          url
        }
      }
    }
    artist {
      data {
        attributes {
          name
        }
      }
    }
    tracks {
      data {
        id
      }
    }
  }
}
    `;
export const ArtistPreviewFragmentDoc = gql`
    fragment ArtistPreview on ArtistEntity {
  id
  attributes {
    name
    image {
      data {
        attributes {
          url
        }
      }
    }
  }
}
    `;
export const TrackFragmentDoc = gql`
    fragment Track on TrackEntity {
  id
  attributes {
    name
    duration
    playCount
    audio {
      data {
        attributes {
          name
          url
        }
      }
    }
    album {
      data {
        id
        attributes {
          name
          releaseDate
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    artist {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
}
    `;
export const AlbumFragmentDoc = gql`
    fragment Album on AlbumEntity {
  id
  attributes {
    name
    genre
    cover {
      data {
        attributes {
          url
        }
      }
    }
    tracks {
      data {
        ...Track
      }
    }
    artist {
      data {
        id
        attributes {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    albumType
    duration
    releaseDate
  }
}
    ${TrackFragmentDoc}`;
export const ArtistFragmentDoc = gql`
    fragment Artist on ArtistEntity {
  id
  attributes {
    name
    albums {
      data {
        ...Album
      }
    }
    image {
      data {
        attributes {
          url
        }
      }
    }
  }
}
    ${AlbumFragmentDoc}`;
export const SavedTrackFragmentDoc = gql`
    fragment SavedTrack on SavedTrack {
  createdAt
  track {
    data {
      ...Track
    }
  }
}
    ${TrackFragmentDoc}`;
export const MeFragmentDoc = gql`
    fragment Me on UsersPermissionsMe {
  id
  username
  email
  profileName
  dob
  gender
  marketingEmails
  communicationEmails
  socialEmails
  image {
    url
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment User on UsersPermissionsUserEntity {
  id
  attributes {
    username
    profileName
    image {
      data {
        attributes {
          url
        }
      }
    }
  }
}
    `;
export const CheckUserSavedAlbumsDocument = gql`
    query CheckUserSavedAlbums($albums: [ID]!) {
  checkUserSavedAlbums(albums: $albums) {
    albums {
      isSaved
    }
  }
}
    `;

/**
 * __useCheckUserSavedAlbumsQuery__
 *
 * To run a query within a React component, call `useCheckUserSavedAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserSavedAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserSavedAlbumsQuery({
 *   variables: {
 *      albums: // value for 'albums'
 *   },
 * });
 */
export function useCheckUserSavedAlbumsQuery(baseOptions: Apollo.QueryHookOptions<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>(CheckUserSavedAlbumsDocument, options);
      }
export function useCheckUserSavedAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>(CheckUserSavedAlbumsDocument, options);
        }
export function useCheckUserSavedAlbumsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>(CheckUserSavedAlbumsDocument, options);
        }
export type CheckUserSavedAlbumsQueryHookResult = ReturnType<typeof useCheckUserSavedAlbumsQuery>;
export type CheckUserSavedAlbumsLazyQueryHookResult = ReturnType<typeof useCheckUserSavedAlbumsLazyQuery>;
export type CheckUserSavedAlbumsSuspenseQueryHookResult = ReturnType<typeof useCheckUserSavedAlbumsSuspenseQuery>;
export type CheckUserSavedAlbumsQueryResult = Apollo.QueryResult<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>;
export const GetAlbumTracksDocument = gql`
    query GetAlbumTracks($albumId: ID!) {
  album(id: $albumId) {
    data {
      attributes {
        tracks {
          data {
            ...Track
          }
        }
      }
    }
  }
}
    ${TrackFragmentDoc}`;

/**
 * __useGetAlbumTracksQuery__
 *
 * To run a query within a React component, call `useGetAlbumTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlbumTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlbumTracksQuery({
 *   variables: {
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useGetAlbumTracksQuery(baseOptions: Apollo.QueryHookOptions<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>(GetAlbumTracksDocument, options);
      }
export function useGetAlbumTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>(GetAlbumTracksDocument, options);
        }
export function useGetAlbumTracksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>(GetAlbumTracksDocument, options);
        }
export type GetAlbumTracksQueryHookResult = ReturnType<typeof useGetAlbumTracksQuery>;
export type GetAlbumTracksLazyQueryHookResult = ReturnType<typeof useGetAlbumTracksLazyQuery>;
export type GetAlbumTracksSuspenseQueryHookResult = ReturnType<typeof useGetAlbumTracksSuspenseQuery>;
export type GetAlbumTracksQueryResult = Apollo.QueryResult<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>;
export const GetAlbumDocument = gql`
    query GetAlbum($id: ID!) {
  album(id: $id) {
    data {
      ...Album
    }
  }
}
    ${AlbumFragmentDoc}`;

/**
 * __useGetAlbumQuery__
 *
 * To run a query within a React component, call `useGetAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlbumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAlbumQuery(baseOptions: Apollo.QueryHookOptions<GetAlbumQuery, GetAlbumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAlbumQuery, GetAlbumQueryVariables>(GetAlbumDocument, options);
      }
export function useGetAlbumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAlbumQuery, GetAlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAlbumQuery, GetAlbumQueryVariables>(GetAlbumDocument, options);
        }
export function useGetAlbumSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAlbumQuery, GetAlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAlbumQuery, GetAlbumQueryVariables>(GetAlbumDocument, options);
        }
export type GetAlbumQueryHookResult = ReturnType<typeof useGetAlbumQuery>;
export type GetAlbumLazyQueryHookResult = ReturnType<typeof useGetAlbumLazyQuery>;
export type GetAlbumSuspenseQueryHookResult = ReturnType<typeof useGetAlbumSuspenseQuery>;
export type GetAlbumQueryResult = Apollo.QueryResult<GetAlbumQuery, GetAlbumQueryVariables>;
export const GetSeveralAlbumsDocument = gql`
    query GetSeveralAlbums {
  albums {
    data {
      ...AlbumPreview
    }
  }
}
    ${AlbumPreviewFragmentDoc}`;

/**
 * __useGetSeveralAlbumsQuery__
 *
 * To run a query within a React component, call `useGetSeveralAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeveralAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeveralAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSeveralAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>(GetSeveralAlbumsDocument, options);
      }
export function useGetSeveralAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>(GetSeveralAlbumsDocument, options);
        }
export function useGetSeveralAlbumsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>(GetSeveralAlbumsDocument, options);
        }
export type GetSeveralAlbumsQueryHookResult = ReturnType<typeof useGetSeveralAlbumsQuery>;
export type GetSeveralAlbumsLazyQueryHookResult = ReturnType<typeof useGetSeveralAlbumsLazyQuery>;
export type GetSeveralAlbumsSuspenseQueryHookResult = ReturnType<typeof useGetSeveralAlbumsSuspenseQuery>;
export type GetSeveralAlbumsQueryResult = Apollo.QueryResult<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>;
export const GetUserSavedAlbumsDocument = gql`
    query GetUserSavedAlbums {
  me {
    savedAlbums {
      createdAt
      album {
        data {
          ...AlbumPreview
        }
      }
    }
  }
}
    ${AlbumPreviewFragmentDoc}`;

/**
 * __useGetUserSavedAlbumsQuery__
 *
 * To run a query within a React component, call `useGetUserSavedAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSavedAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSavedAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserSavedAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserSavedAlbumsQuery, GetUserSavedAlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserSavedAlbumsQuery, GetUserSavedAlbumsQueryVariables>(GetUserSavedAlbumsDocument, options);
      }
export function useGetUserSavedAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserSavedAlbumsQuery, GetUserSavedAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserSavedAlbumsQuery, GetUserSavedAlbumsQueryVariables>(GetUserSavedAlbumsDocument, options);
        }
export function useGetUserSavedAlbumsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserSavedAlbumsQuery, GetUserSavedAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserSavedAlbumsQuery, GetUserSavedAlbumsQueryVariables>(GetUserSavedAlbumsDocument, options);
        }
export type GetUserSavedAlbumsQueryHookResult = ReturnType<typeof useGetUserSavedAlbumsQuery>;
export type GetUserSavedAlbumsLazyQueryHookResult = ReturnType<typeof useGetUserSavedAlbumsLazyQuery>;
export type GetUserSavedAlbumsSuspenseQueryHookResult = ReturnType<typeof useGetUserSavedAlbumsSuspenseQuery>;
export type GetUserSavedAlbumsQueryResult = Apollo.QueryResult<GetUserSavedAlbumsQuery, GetUserSavedAlbumsQueryVariables>;
export const RemoveUserSavedAlbumDocument = gql`
    mutation RemoveUserSavedAlbum($albumId: ID!) {
  deleteSavedAlbum(albumId: $albumId) {
    isSaved
  }
}
    `;
export type RemoveUserSavedAlbumMutationFn = Apollo.MutationFunction<RemoveUserSavedAlbumMutation, RemoveUserSavedAlbumMutationVariables>;

/**
 * __useRemoveUserSavedAlbumMutation__
 *
 * To run a mutation, you first call `useRemoveUserSavedAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserSavedAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserSavedAlbumMutation, { data, loading, error }] = useRemoveUserSavedAlbumMutation({
 *   variables: {
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useRemoveUserSavedAlbumMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserSavedAlbumMutation, RemoveUserSavedAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserSavedAlbumMutation, RemoveUserSavedAlbumMutationVariables>(RemoveUserSavedAlbumDocument, options);
      }
export type RemoveUserSavedAlbumMutationHookResult = ReturnType<typeof useRemoveUserSavedAlbumMutation>;
export type RemoveUserSavedAlbumMutationResult = Apollo.MutationResult<RemoveUserSavedAlbumMutation>;
export type RemoveUserSavedAlbumMutationOptions = Apollo.BaseMutationOptions<RemoveUserSavedAlbumMutation, RemoveUserSavedAlbumMutationVariables>;
export const SaveAlbumForCurrentUserDocument = gql`
    mutation SaveAlbumForCurrentUser($albumId: ID!) {
  createSavedAlbum(albumId: $albumId) {
    isSaved
  }
}
    `;
export type SaveAlbumForCurrentUserMutationFn = Apollo.MutationFunction<SaveAlbumForCurrentUserMutation, SaveAlbumForCurrentUserMutationVariables>;

/**
 * __useSaveAlbumForCurrentUserMutation__
 *
 * To run a mutation, you first call `useSaveAlbumForCurrentUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAlbumForCurrentUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAlbumForCurrentUserMutation, { data, loading, error }] = useSaveAlbumForCurrentUserMutation({
 *   variables: {
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useSaveAlbumForCurrentUserMutation(baseOptions?: Apollo.MutationHookOptions<SaveAlbumForCurrentUserMutation, SaveAlbumForCurrentUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAlbumForCurrentUserMutation, SaveAlbumForCurrentUserMutationVariables>(SaveAlbumForCurrentUserDocument, options);
      }
export type SaveAlbumForCurrentUserMutationHookResult = ReturnType<typeof useSaveAlbumForCurrentUserMutation>;
export type SaveAlbumForCurrentUserMutationResult = Apollo.MutationResult<SaveAlbumForCurrentUserMutation>;
export type SaveAlbumForCurrentUserMutationOptions = Apollo.BaseMutationOptions<SaveAlbumForCurrentUserMutation, SaveAlbumForCurrentUserMutationVariables>;
export const GetArtistAlbumsDocument = gql`
    query GetArtistAlbums($artistId: ID!) {
  artist(id: $artistId) {
    data {
      attributes {
        albums {
          data {
            ...AlbumPreview
          }
        }
      }
    }
  }
}
    ${AlbumPreviewFragmentDoc}`;

/**
 * __useGetArtistAlbumsQuery__
 *
 * To run a query within a React component, call `useGetArtistAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistAlbumsQuery({
 *   variables: {
 *      artistId: // value for 'artistId'
 *   },
 * });
 */
export function useGetArtistAlbumsQuery(baseOptions: Apollo.QueryHookOptions<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>(GetArtistAlbumsDocument, options);
      }
export function useGetArtistAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>(GetArtistAlbumsDocument, options);
        }
export function useGetArtistAlbumsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>(GetArtistAlbumsDocument, options);
        }
export type GetArtistAlbumsQueryHookResult = ReturnType<typeof useGetArtistAlbumsQuery>;
export type GetArtistAlbumsLazyQueryHookResult = ReturnType<typeof useGetArtistAlbumsLazyQuery>;
export type GetArtistAlbumsSuspenseQueryHookResult = ReturnType<typeof useGetArtistAlbumsSuspenseQuery>;
export type GetArtistAlbumsQueryResult = Apollo.QueryResult<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>;
export const GetArtistTopTracksDocument = gql`
    query GetArtistTopTracks($artistId: ID!) {
  topTracks: tracks(
    filters: {artist: {id: {eq: $artistId}}}
    sort: "playCount:desc"
  ) {
    data {
      ...Track
    }
  }
}
    ${TrackFragmentDoc}`;

/**
 * __useGetArtistTopTracksQuery__
 *
 * To run a query within a React component, call `useGetArtistTopTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistTopTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistTopTracksQuery({
 *   variables: {
 *      artistId: // value for 'artistId'
 *   },
 * });
 */
export function useGetArtistTopTracksQuery(baseOptions: Apollo.QueryHookOptions<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>(GetArtistTopTracksDocument, options);
      }
export function useGetArtistTopTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>(GetArtistTopTracksDocument, options);
        }
export function useGetArtistTopTracksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>(GetArtistTopTracksDocument, options);
        }
export type GetArtistTopTracksQueryHookResult = ReturnType<typeof useGetArtistTopTracksQuery>;
export type GetArtistTopTracksLazyQueryHookResult = ReturnType<typeof useGetArtistTopTracksLazyQuery>;
export type GetArtistTopTracksSuspenseQueryHookResult = ReturnType<typeof useGetArtistTopTracksSuspenseQuery>;
export type GetArtistTopTracksQueryResult = Apollo.QueryResult<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>;
export const GetArtistDocument = gql`
    query GetArtist($id: ID!) {
  artist(id: $id) {
    data {
      id
      attributes {
        name
        albums {
          data {
            ...AlbumPreview
          }
        }
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  topTracks: tracks(filters: {artist: {id: {eq: $id}}}, sort: "playCount:desc") {
    data {
      ...Track
    }
  }
}
    ${AlbumPreviewFragmentDoc}
${TrackFragmentDoc}`;

/**
 * __useGetArtistQuery__
 *
 * To run a query within a React component, call `useGetArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArtistQuery(baseOptions: Apollo.QueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
      }
export function useGetArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
        }
export function useGetArtistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
        }
export type GetArtistQueryHookResult = ReturnType<typeof useGetArtistQuery>;
export type GetArtistLazyQueryHookResult = ReturnType<typeof useGetArtistLazyQuery>;
export type GetArtistSuspenseQueryHookResult = ReturnType<typeof useGetArtistSuspenseQuery>;
export type GetArtistQueryResult = Apollo.QueryResult<GetArtistQuery, GetArtistQueryVariables>;
export const GetSeveralArtistsDocument = gql`
    query GetSeveralArtists($filters: ArtistFiltersInput, $sort: [String] = []) {
  artists(filters: $filters, sort: $sort) {
    data {
      ...ArtistPreview
    }
  }
}
    ${ArtistPreviewFragmentDoc}`;

/**
 * __useGetSeveralArtistsQuery__
 *
 * To run a query within a React component, call `useGetSeveralArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeveralArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeveralArtistsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetSeveralArtistsQuery(baseOptions?: Apollo.QueryHookOptions<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>(GetSeveralArtistsDocument, options);
      }
export function useGetSeveralArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>(GetSeveralArtistsDocument, options);
        }
export function useGetSeveralArtistsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>(GetSeveralArtistsDocument, options);
        }
export type GetSeveralArtistsQueryHookResult = ReturnType<typeof useGetSeveralArtistsQuery>;
export type GetSeveralArtistsLazyQueryHookResult = ReturnType<typeof useGetSeveralArtistsLazyQuery>;
export type GetSeveralArtistsSuspenseQueryHookResult = ReturnType<typeof useGetSeveralArtistsSuspenseQuery>;
export type GetSeveralArtistsQueryResult = Apollo.QueryResult<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($currentPassword: String!, $password: String!, $passwordConfirmation: String!) {
  changePassword(
    password: $password
    currentPassword: $currentPassword
    passwordConfirmation: $passwordConfirmation
  ) {
    __typename
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const EmailAvailableDocument = gql`
    query EmailAvailable($email: String!) {
  emailAvailable(email: $email)
}
    `;

/**
 * __useEmailAvailableQuery__
 *
 * To run a query within a React component, call `useEmailAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailAvailableQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useEmailAvailableQuery(baseOptions: Apollo.QueryHookOptions<EmailAvailableQuery, EmailAvailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmailAvailableQuery, EmailAvailableQueryVariables>(EmailAvailableDocument, options);
      }
export function useEmailAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailAvailableQuery, EmailAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmailAvailableQuery, EmailAvailableQueryVariables>(EmailAvailableDocument, options);
        }
export function useEmailAvailableSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EmailAvailableQuery, EmailAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EmailAvailableQuery, EmailAvailableQueryVariables>(EmailAvailableDocument, options);
        }
export type EmailAvailableQueryHookResult = ReturnType<typeof useEmailAvailableQuery>;
export type EmailAvailableLazyQueryHookResult = ReturnType<typeof useEmailAvailableLazyQuery>;
export type EmailAvailableSuspenseQueryHookResult = ReturnType<typeof useEmailAvailableSuspenseQuery>;
export type EmailAvailableQueryResult = Apollo.QueryResult<EmailAvailableQuery, EmailAvailableQueryVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      username
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      id
      username
      email
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($code: String!, $password: String!, $passwordConfirmation: String!) {
  resetPassword(
    code: $code
    password: $password
    passwordConfirmation: $passwordConfirmation
  ) {
    __typename
    user {
      email
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      code: // value for 'code'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CheckUserSavedTracksDocument = gql`
    query CheckUserSavedTracks($tracks: [ID]!) {
  checkUserSavedTracks(tracks: $tracks) {
    tracks {
      isSaved
    }
  }
}
    `;

/**
 * __useCheckUserSavedTracksQuery__
 *
 * To run a query within a React component, call `useCheckUserSavedTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserSavedTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserSavedTracksQuery({
 *   variables: {
 *      tracks: // value for 'tracks'
 *   },
 * });
 */
export function useCheckUserSavedTracksQuery(baseOptions: Apollo.QueryHookOptions<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>(CheckUserSavedTracksDocument, options);
      }
export function useCheckUserSavedTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>(CheckUserSavedTracksDocument, options);
        }
export function useCheckUserSavedTracksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>(CheckUserSavedTracksDocument, options);
        }
export type CheckUserSavedTracksQueryHookResult = ReturnType<typeof useCheckUserSavedTracksQuery>;
export type CheckUserSavedTracksLazyQueryHookResult = ReturnType<typeof useCheckUserSavedTracksLazyQuery>;
export type CheckUserSavedTracksSuspenseQueryHookResult = ReturnType<typeof useCheckUserSavedTracksSuspenseQuery>;
export type CheckUserSavedTracksQueryResult = Apollo.QueryResult<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>;
export const GetSeveralTracksDocument = gql`
    query GetSeveralTracks($filters: TrackFiltersInput, $sort: [String] = []) {
  tracks(filters: $filters, sort: $sort) {
    data {
      ...Track
    }
  }
}
    ${TrackFragmentDoc}`;

/**
 * __useGetSeveralTracksQuery__
 *
 * To run a query within a React component, call `useGetSeveralTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeveralTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeveralTracksQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetSeveralTracksQuery(baseOptions?: Apollo.QueryHookOptions<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>(GetSeveralTracksDocument, options);
      }
export function useGetSeveralTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>(GetSeveralTracksDocument, options);
        }
export function useGetSeveralTracksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>(GetSeveralTracksDocument, options);
        }
export type GetSeveralTracksQueryHookResult = ReturnType<typeof useGetSeveralTracksQuery>;
export type GetSeveralTracksLazyQueryHookResult = ReturnType<typeof useGetSeveralTracksLazyQuery>;
export type GetSeveralTracksSuspenseQueryHookResult = ReturnType<typeof useGetSeveralTracksSuspenseQuery>;
export type GetSeveralTracksQueryResult = Apollo.QueryResult<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>;
export const GetTrackDocument = gql`
    query GetTrack($id: ID!) {
  track(id: $id) {
    data {
      ...Track
    }
  }
}
    ${TrackFragmentDoc}`;

/**
 * __useGetTrackQuery__
 *
 * To run a query within a React component, call `useGetTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTrackQuery(baseOptions: Apollo.QueryHookOptions<GetTrackQuery, GetTrackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrackQuery, GetTrackQueryVariables>(GetTrackDocument, options);
      }
export function useGetTrackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrackQuery, GetTrackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrackQuery, GetTrackQueryVariables>(GetTrackDocument, options);
        }
export function useGetTrackSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTrackQuery, GetTrackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrackQuery, GetTrackQueryVariables>(GetTrackDocument, options);
        }
export type GetTrackQueryHookResult = ReturnType<typeof useGetTrackQuery>;
export type GetTrackLazyQueryHookResult = ReturnType<typeof useGetTrackLazyQuery>;
export type GetTrackSuspenseQueryHookResult = ReturnType<typeof useGetTrackSuspenseQuery>;
export type GetTrackQueryResult = Apollo.QueryResult<GetTrackQuery, GetTrackQueryVariables>;
export const GetUserSavedTracksDocument = gql`
    query GetUserSavedTracks {
  me {
    savedTracks {
      ...SavedTrack
    }
  }
}
    ${SavedTrackFragmentDoc}`;

/**
 * __useGetUserSavedTracksQuery__
 *
 * To run a query within a React component, call `useGetUserSavedTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSavedTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSavedTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserSavedTracksQuery(baseOptions?: Apollo.QueryHookOptions<GetUserSavedTracksQuery, GetUserSavedTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserSavedTracksQuery, GetUserSavedTracksQueryVariables>(GetUserSavedTracksDocument, options);
      }
export function useGetUserSavedTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserSavedTracksQuery, GetUserSavedTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserSavedTracksQuery, GetUserSavedTracksQueryVariables>(GetUserSavedTracksDocument, options);
        }
export function useGetUserSavedTracksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserSavedTracksQuery, GetUserSavedTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserSavedTracksQuery, GetUserSavedTracksQueryVariables>(GetUserSavedTracksDocument, options);
        }
export type GetUserSavedTracksQueryHookResult = ReturnType<typeof useGetUserSavedTracksQuery>;
export type GetUserSavedTracksLazyQueryHookResult = ReturnType<typeof useGetUserSavedTracksLazyQuery>;
export type GetUserSavedTracksSuspenseQueryHookResult = ReturnType<typeof useGetUserSavedTracksSuspenseQuery>;
export type GetUserSavedTracksQueryResult = Apollo.QueryResult<GetUserSavedTracksQuery, GetUserSavedTracksQueryVariables>;
export const TrackIncrementPlayCountDocument = gql`
    query TrackIncrementPlayCount($trackId: ID!) {
  trackIncrementPlayCount(trackId: $trackId) {
    playCount
  }
}
    `;

/**
 * __useTrackIncrementPlayCountQuery__
 *
 * To run a query within a React component, call `useTrackIncrementPlayCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackIncrementPlayCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackIncrementPlayCountQuery({
 *   variables: {
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useTrackIncrementPlayCountQuery(baseOptions: Apollo.QueryHookOptions<TrackIncrementPlayCountQuery, TrackIncrementPlayCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackIncrementPlayCountQuery, TrackIncrementPlayCountQueryVariables>(TrackIncrementPlayCountDocument, options);
      }
export function useTrackIncrementPlayCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackIncrementPlayCountQuery, TrackIncrementPlayCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackIncrementPlayCountQuery, TrackIncrementPlayCountQueryVariables>(TrackIncrementPlayCountDocument, options);
        }
export function useTrackIncrementPlayCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrackIncrementPlayCountQuery, TrackIncrementPlayCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrackIncrementPlayCountQuery, TrackIncrementPlayCountQueryVariables>(TrackIncrementPlayCountDocument, options);
        }
export type TrackIncrementPlayCountQueryHookResult = ReturnType<typeof useTrackIncrementPlayCountQuery>;
export type TrackIncrementPlayCountLazyQueryHookResult = ReturnType<typeof useTrackIncrementPlayCountLazyQuery>;
export type TrackIncrementPlayCountSuspenseQueryHookResult = ReturnType<typeof useTrackIncrementPlayCountSuspenseQuery>;
export type TrackIncrementPlayCountQueryResult = Apollo.QueryResult<TrackIncrementPlayCountQuery, TrackIncrementPlayCountQueryVariables>;
export const RemoveUserSavedTrackDocument = gql`
    mutation RemoveUserSavedTrack($trackId: ID!) {
  deleteSavedTrack(trackId: $trackId) {
    isSaved
  }
}
    `;
export type RemoveUserSavedTrackMutationFn = Apollo.MutationFunction<RemoveUserSavedTrackMutation, RemoveUserSavedTrackMutationVariables>;

/**
 * __useRemoveUserSavedTrackMutation__
 *
 * To run a mutation, you first call `useRemoveUserSavedTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserSavedTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserSavedTrackMutation, { data, loading, error }] = useRemoveUserSavedTrackMutation({
 *   variables: {
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useRemoveUserSavedTrackMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserSavedTrackMutation, RemoveUserSavedTrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserSavedTrackMutation, RemoveUserSavedTrackMutationVariables>(RemoveUserSavedTrackDocument, options);
      }
export type RemoveUserSavedTrackMutationHookResult = ReturnType<typeof useRemoveUserSavedTrackMutation>;
export type RemoveUserSavedTrackMutationResult = Apollo.MutationResult<RemoveUserSavedTrackMutation>;
export type RemoveUserSavedTrackMutationOptions = Apollo.BaseMutationOptions<RemoveUserSavedTrackMutation, RemoveUserSavedTrackMutationVariables>;
export const SaveTrackForCurrentUserDocument = gql`
    mutation SaveTrackForCurrentUser($trackId: ID!) {
  createSavedTrack(trackId: $trackId) {
    isSaved
  }
}
    `;
export type SaveTrackForCurrentUserMutationFn = Apollo.MutationFunction<SaveTrackForCurrentUserMutation, SaveTrackForCurrentUserMutationVariables>;

/**
 * __useSaveTrackForCurrentUserMutation__
 *
 * To run a mutation, you first call `useSaveTrackForCurrentUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTrackForCurrentUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTrackForCurrentUserMutation, { data, loading, error }] = useSaveTrackForCurrentUserMutation({
 *   variables: {
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useSaveTrackForCurrentUserMutation(baseOptions?: Apollo.MutationHookOptions<SaveTrackForCurrentUserMutation, SaveTrackForCurrentUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTrackForCurrentUserMutation, SaveTrackForCurrentUserMutationVariables>(SaveTrackForCurrentUserDocument, options);
      }
export type SaveTrackForCurrentUserMutationHookResult = ReturnType<typeof useSaveTrackForCurrentUserMutation>;
export type SaveTrackForCurrentUserMutationResult = Apollo.MutationResult<SaveTrackForCurrentUserMutation>;
export type SaveTrackForCurrentUserMutationOptions = Apollo.BaseMutationOptions<SaveTrackForCurrentUserMutation, SaveTrackForCurrentUserMutationVariables>;
export const FollowArtistDocument = gql`
    mutation FollowArtist($artistId: ID!) {
  createFollowingArtist(artistId: $artistId) {
    isFollowed
  }
}
    `;
export type FollowArtistMutationFn = Apollo.MutationFunction<FollowArtistMutation, FollowArtistMutationVariables>;

/**
 * __useFollowArtistMutation__
 *
 * To run a mutation, you first call `useFollowArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followArtistMutation, { data, loading, error }] = useFollowArtistMutation({
 *   variables: {
 *      artistId: // value for 'artistId'
 *   },
 * });
 */
export function useFollowArtistMutation(baseOptions?: Apollo.MutationHookOptions<FollowArtistMutation, FollowArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowArtistMutation, FollowArtistMutationVariables>(FollowArtistDocument, options);
      }
export type FollowArtistMutationHookResult = ReturnType<typeof useFollowArtistMutation>;
export type FollowArtistMutationResult = Apollo.MutationResult<FollowArtistMutation>;
export type FollowArtistMutationOptions = Apollo.BaseMutationOptions<FollowArtistMutation, FollowArtistMutationVariables>;
export const GetCurrentUserProfileDocument = gql`
    query GetCurrentUserProfile {
  me {
    ...Me
  }
}
    ${MeFragmentDoc}`;

/**
 * __useGetCurrentUserProfileQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>(GetCurrentUserProfileDocument, options);
      }
export function useGetCurrentUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>(GetCurrentUserProfileDocument, options);
        }
export function useGetCurrentUserProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>(GetCurrentUserProfileDocument, options);
        }
export type GetCurrentUserProfileQueryHookResult = ReturnType<typeof useGetCurrentUserProfileQuery>;
export type GetCurrentUserProfileLazyQueryHookResult = ReturnType<typeof useGetCurrentUserProfileLazyQuery>;
export type GetCurrentUserProfileSuspenseQueryHookResult = ReturnType<typeof useGetCurrentUserProfileSuspenseQuery>;
export type GetCurrentUserProfileQueryResult = Apollo.QueryResult<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>;
export const GetUserTopItemsDocument = gql`
    query GetUserTopItems {
  userTopItems
}
    `;

/**
 * __useGetUserTopItemsQuery__
 *
 * To run a query within a React component, call `useGetUserTopItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTopItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTopItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserTopItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserTopItemsQuery, GetUserTopItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTopItemsQuery, GetUserTopItemsQueryVariables>(GetUserTopItemsDocument, options);
      }
export function useGetUserTopItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTopItemsQuery, GetUserTopItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTopItemsQuery, GetUserTopItemsQueryVariables>(GetUserTopItemsDocument, options);
        }
export function useGetUserTopItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserTopItemsQuery, GetUserTopItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserTopItemsQuery, GetUserTopItemsQueryVariables>(GetUserTopItemsDocument, options);
        }
export type GetUserTopItemsQueryHookResult = ReturnType<typeof useGetUserTopItemsQuery>;
export type GetUserTopItemsLazyQueryHookResult = ReturnType<typeof useGetUserTopItemsLazyQuery>;
export type GetUserTopItemsSuspenseQueryHookResult = ReturnType<typeof useGetUserTopItemsSuspenseQuery>;
export type GetUserTopItemsQueryResult = Apollo.QueryResult<GetUserTopItemsQuery, GetUserTopItemsQueryVariables>;
export const UnfollowArtistDocument = gql`
    mutation UnfollowArtist($artistId: ID!) {
  deleteFollowingArtist(artistId: $artistId) {
    isFollowed
  }
}
    `;
export type UnfollowArtistMutationFn = Apollo.MutationFunction<UnfollowArtistMutation, UnfollowArtistMutationVariables>;

/**
 * __useUnfollowArtistMutation__
 *
 * To run a mutation, you first call `useUnfollowArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowArtistMutation, { data, loading, error }] = useUnfollowArtistMutation({
 *   variables: {
 *      artistId: // value for 'artistId'
 *   },
 * });
 */
export function useUnfollowArtistMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowArtistMutation, UnfollowArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfollowArtistMutation, UnfollowArtistMutationVariables>(UnfollowArtistDocument, options);
      }
export type UnfollowArtistMutationHookResult = ReturnType<typeof useUnfollowArtistMutation>;
export type UnfollowArtistMutationResult = Apollo.MutationResult<UnfollowArtistMutation>;
export type UnfollowArtistMutationOptions = Apollo.BaseMutationOptions<UnfollowArtistMutation, UnfollowArtistMutationVariables>;
export const UpdateUserNotificationsDocument = gql`
    mutation UpdateUserNotifications($data: UpdateUserNotificationsInput) {
  updateUserNotifications(data: $data) {
    __typename
  }
}
    `;
export type UpdateUserNotificationsMutationFn = Apollo.MutationFunction<UpdateUserNotificationsMutation, UpdateUserNotificationsMutationVariables>;

/**
 * __useUpdateUserNotificationsMutation__
 *
 * To run a mutation, you first call `useUpdateUserNotificationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserNotificationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserNotificationsMutation, { data, loading, error }] = useUpdateUserNotificationsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserNotificationsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserNotificationsMutation, UpdateUserNotificationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserNotificationsMutation, UpdateUserNotificationsMutationVariables>(UpdateUserNotificationsDocument, options);
      }
export type UpdateUserNotificationsMutationHookResult = ReturnType<typeof useUpdateUserNotificationsMutation>;
export type UpdateUserNotificationsMutationResult = Apollo.MutationResult<UpdateUserNotificationsMutation>;
export type UpdateUserNotificationsMutationOptions = Apollo.BaseMutationOptions<UpdateUserNotificationsMutation, UpdateUserNotificationsMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($data: UpdateUserProfileInput!) {
  updateUserProfile(data: $data) {
    __typename
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;