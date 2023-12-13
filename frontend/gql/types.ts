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
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ArtistFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ArtistFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  tracks: InputMaybe<TrackFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ArtistInput = {
  albums: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  tracks: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
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

export type GenericMorph = Album | Artist | I18NLocale | Like | Track | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

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

export type Like = {
  __typename?: 'Like';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  track: Maybe<TrackEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<UsersPermissionsUserEntityResponse>;
};

export type LikeEntity = {
  __typename?: 'LikeEntity';
  attributes: Maybe<Like>;
  id: Maybe<Scalars['ID']['output']>;
};

export type LikeEntityResponse = {
  __typename?: 'LikeEntityResponse';
  data: Maybe<LikeEntity>;
};

export type LikeEntityResponseCollection = {
  __typename?: 'LikeEntityResponseCollection';
  data: Array<LikeEntity>;
  meta: ResponseCollectionMeta;
};

export type LikeFiltersInput = {
  and: InputMaybe<Array<InputMaybe<LikeFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<LikeFiltersInput>;
  or: InputMaybe<Array<InputMaybe<LikeFiltersInput>>>;
  track: InputMaybe<TrackFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type LikeInput = {
  track: InputMaybe<Scalars['ID']['input']>;
  user: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createAlbum: Maybe<AlbumEntityResponse>;
  createArtist: Maybe<ArtistEntityResponse>;
  createLike: Maybe<LikeEntityResponse>;
  createTrack: Maybe<TrackEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAlbum: Maybe<AlbumEntityResponse>;
  deleteArtist: Maybe<ArtistEntityResponse>;
  deleteLike: Maybe<LikeEntityResponse>;
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
  updateArtist: Maybe<ArtistEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateLike: Maybe<LikeEntityResponse>;
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


export type MutationCreateArtistArgs = {
  data: ArtistInput;
};


export type MutationCreateLikeArgs = {
  data: LikeInput;
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


export type MutationDeleteArtistArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLikeArgs = {
  id: Scalars['ID']['input'];
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


export type MutationUpdateArtistArgs = {
  data: ArtistInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateLikeArgs = {
  data: LikeInput;
  id: Scalars['ID']['input'];
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
  emailAvailable: Maybe<Scalars['Boolean']['output']>;
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  like: Maybe<LikeEntityResponse>;
  likes: Maybe<LikeEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  track: Maybe<TrackEntityResponse>;
  trackIncrementPlayCount: TrackIncrementPlayCountResponse;
  tracks: Maybe<TrackEntityResponseCollection>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder: Maybe<UploadFolderEntityResponse>;
  uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
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


export type QueryEmailAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLikeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLikesArgs = {
  filters: InputMaybe<LikeFiltersInput>;
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
  gender: Maybe<Enum_Userspermissionsuser_Gender>;
  image: Maybe<UploadFileEntityResponse>;
  marketingEmails: Maybe<Scalars['Boolean']['output']>;
  profileName: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  socialEmails: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Maybe<Scalars['String']['output']>;
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
  gender: InputMaybe<Enum_Userspermissionsuser_Gender>;
  image: InputMaybe<Scalars['ID']['input']>;
  marketingEmails: InputMaybe<Scalars['Boolean']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  profileName: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  socialEmails: InputMaybe<Scalars['Boolean']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AlbumListQueryVariables = Exact<{ [key: string]: never; }>;


export type AlbumListQuery = { __typename?: 'Query', albums: { __typename?: 'AlbumEntityResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } };

export type AlbumTrackListQueryVariables = Exact<{
  albumId: Scalars['ID']['input'];
}>;


export type AlbumTrackListQuery = { __typename?: 'Query', album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', attributes: { __typename?: 'Album', tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } } } } };

export type AlbumFragment = { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, genre: string, albumType: Enum_Album_Albumtype, duration: number, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } } } };

export type AlbumQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AlbumQuery = { __typename?: 'Query', album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, genre: string, albumType: Enum_Album_Albumtype, duration: number, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } } } } } };

export type ArtistFragment = { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, albums: { __typename?: 'AlbumRelationResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, genre: string, albumType: Enum_Album_Albumtype, duration: number, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } } } }> }, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } };

export type ArtistQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ArtistQuery = { __typename?: 'Query', artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, albums: { __typename?: 'AlbumRelationResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, genre: string, albumType: Enum_Album_Albumtype, duration: number, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } }, tracks: { __typename?: 'TrackRelationResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } } } }> }, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, popularTracks: { __typename?: 'TrackEntityResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } };

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

export type TrackIncrementPlayCountQueryVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type TrackIncrementPlayCountQuery = { __typename?: 'Query', trackIncrementPlayCount: { __typename?: 'TrackIncrementPlayCountResponse', playCount: number } };

export type TrackListQueryVariables = Exact<{
  filters: InputMaybe<TrackFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type TrackListQuery = { __typename?: 'Query', tracks: { __typename?: 'TrackEntityResponseCollection', data: Array<{ __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } }> } };

export type TrackFragment = { __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } };

export type TrackQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TrackQuery = { __typename?: 'Query', track: { __typename?: 'TrackEntityResponse', data: { __typename?: 'TrackEntity', id: number, attributes: { __typename?: 'Track', name: string, duration: number, playCount: number, audio: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } }, album: { __typename?: 'AlbumEntityResponse', data: { __typename?: 'AlbumEntity', id: number, attributes: { __typename?: 'Album', name: string, releaseDate: any, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } } }, artist: { __typename?: 'ArtistEntityResponse', data: { __typename?: 'ArtistEntity', id: number, attributes: { __typename?: 'Artist', name: string } } } } } } };

export type MeFragment = { __typename?: 'UsersPermissionsMe', id: number, username: string, email: string, profileName: string, dob: any, gender: Enum_Userspermissionsuser_Gender, marketingEmails: boolean, communicationEmails: boolean, socialEmails: boolean, image: { __typename?: 'UploadFile', url: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UsersPermissionsMe', id: number, username: string, email: string, profileName: string, dob: any, gender: Enum_Userspermissionsuser_Gender, marketingEmails: boolean, communicationEmails: boolean, socialEmails: boolean, image: { __typename?: 'UploadFile', url: string } } };

export type UpdateUserNotificationsMutationVariables = Exact<{
  data: InputMaybe<UpdateUserNotificationsInput>;
}>;


export type UpdateUserNotificationsMutation = { __typename?: 'Mutation', updateUserNotifications: { __typename: 'UsersPermissionsUserEntityResponse' } };

export type UpdateUserProfileMutationVariables = Exact<{
  data: UpdateUserProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename: 'UsersPermissionsUserEntityResponse' } };

export type UserFragment = { __typename?: 'UsersPermissionsUserEntity', id: number, attributes: { __typename?: 'UsersPermissionsUser', username: string, profileName: string, image: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } };

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
export const AlbumListDocument = gql`
    query AlbumList {
  albums {
    data {
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
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAlbumListQuery__
 *
 * To run a query within a React component, call `useAlbumListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumListQuery({
 *   variables: {
 *   },
 * });
 */
export function useAlbumListQuery(baseOptions?: Apollo.QueryHookOptions<AlbumListQuery, AlbumListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumListQuery, AlbumListQueryVariables>(AlbumListDocument, options);
      }
export function useAlbumListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumListQuery, AlbumListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumListQuery, AlbumListQueryVariables>(AlbumListDocument, options);
        }
export function useAlbumListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AlbumListQuery, AlbumListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AlbumListQuery, AlbumListQueryVariables>(AlbumListDocument, options);
        }
export type AlbumListQueryHookResult = ReturnType<typeof useAlbumListQuery>;
export type AlbumListLazyQueryHookResult = ReturnType<typeof useAlbumListLazyQuery>;
export type AlbumListSuspenseQueryHookResult = ReturnType<typeof useAlbumListSuspenseQuery>;
export type AlbumListQueryResult = Apollo.QueryResult<AlbumListQuery, AlbumListQueryVariables>;
export const AlbumTrackListDocument = gql`
    query AlbumTrackList($albumId: ID!) {
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
 * __useAlbumTrackListQuery__
 *
 * To run a query within a React component, call `useAlbumTrackListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumTrackListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumTrackListQuery({
 *   variables: {
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useAlbumTrackListQuery(baseOptions: Apollo.QueryHookOptions<AlbumTrackListQuery, AlbumTrackListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumTrackListQuery, AlbumTrackListQueryVariables>(AlbumTrackListDocument, options);
      }
export function useAlbumTrackListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumTrackListQuery, AlbumTrackListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumTrackListQuery, AlbumTrackListQueryVariables>(AlbumTrackListDocument, options);
        }
export function useAlbumTrackListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AlbumTrackListQuery, AlbumTrackListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AlbumTrackListQuery, AlbumTrackListQueryVariables>(AlbumTrackListDocument, options);
        }
export type AlbumTrackListQueryHookResult = ReturnType<typeof useAlbumTrackListQuery>;
export type AlbumTrackListLazyQueryHookResult = ReturnType<typeof useAlbumTrackListLazyQuery>;
export type AlbumTrackListSuspenseQueryHookResult = ReturnType<typeof useAlbumTrackListSuspenseQuery>;
export type AlbumTrackListQueryResult = Apollo.QueryResult<AlbumTrackListQuery, AlbumTrackListQueryVariables>;
export const AlbumDocument = gql`
    query Album($id: ID!) {
  album(id: $id) {
    data {
      ...Album
    }
  }
}
    ${AlbumFragmentDoc}`;

/**
 * __useAlbumQuery__
 *
 * To run a query within a React component, call `useAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAlbumQuery(baseOptions: Apollo.QueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, options);
      }
export function useAlbumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, options);
        }
export function useAlbumSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, options);
        }
export type AlbumQueryHookResult = ReturnType<typeof useAlbumQuery>;
export type AlbumLazyQueryHookResult = ReturnType<typeof useAlbumLazyQuery>;
export type AlbumSuspenseQueryHookResult = ReturnType<typeof useAlbumSuspenseQuery>;
export type AlbumQueryResult = Apollo.QueryResult<AlbumQuery, AlbumQueryVariables>;
export const ArtistDocument = gql`
    query Artist($id: ID!) {
  artist(id: $id) {
    data {
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
  }
  popularTracks: tracks(
    filters: {artist: {id: {eq: $id}}}
    sort: "playCount:desc"
  ) {
    data {
      ...Track
    }
  }
}
    ${AlbumFragmentDoc}
${TrackFragmentDoc}`;

/**
 * __useArtistQuery__
 *
 * To run a query within a React component, call `useArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArtistQuery(baseOptions: Apollo.QueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
      }
export function useArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
        }
export function useArtistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
        }
export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>;
export type ArtistLazyQueryHookResult = ReturnType<typeof useArtistLazyQuery>;
export type ArtistSuspenseQueryHookResult = ReturnType<typeof useArtistSuspenseQuery>;
export type ArtistQueryResult = Apollo.QueryResult<ArtistQuery, ArtistQueryVariables>;
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
export const TrackListDocument = gql`
    query TrackList($filters: TrackFiltersInput, $sort: [String] = []) {
  tracks(filters: $filters, sort: $sort) {
    data {
      ...Track
    }
  }
}
    ${TrackFragmentDoc}`;

/**
 * __useTrackListQuery__
 *
 * To run a query within a React component, call `useTrackListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackListQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTrackListQuery(baseOptions?: Apollo.QueryHookOptions<TrackListQuery, TrackListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackListQuery, TrackListQueryVariables>(TrackListDocument, options);
      }
export function useTrackListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackListQuery, TrackListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackListQuery, TrackListQueryVariables>(TrackListDocument, options);
        }
export function useTrackListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrackListQuery, TrackListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrackListQuery, TrackListQueryVariables>(TrackListDocument, options);
        }
export type TrackListQueryHookResult = ReturnType<typeof useTrackListQuery>;
export type TrackListLazyQueryHookResult = ReturnType<typeof useTrackListLazyQuery>;
export type TrackListSuspenseQueryHookResult = ReturnType<typeof useTrackListSuspenseQuery>;
export type TrackListQueryResult = Apollo.QueryResult<TrackListQuery, TrackListQueryVariables>;
export const TrackDocument = gql`
    query Track($id: ID!) {
  track(id: $id) {
    data {
      ...Track
    }
  }
}
    ${TrackFragmentDoc}`;

/**
 * __useTrackQuery__
 *
 * To run a query within a React component, call `useTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrackQuery(baseOptions: Apollo.QueryHookOptions<TrackQuery, TrackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackQuery, TrackQueryVariables>(TrackDocument, options);
      }
export function useTrackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackQuery, TrackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackQuery, TrackQueryVariables>(TrackDocument, options);
        }
export function useTrackSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrackQuery, TrackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrackQuery, TrackQueryVariables>(TrackDocument, options);
        }
export type TrackQueryHookResult = ReturnType<typeof useTrackQuery>;
export type TrackLazyQueryHookResult = ReturnType<typeof useTrackLazyQuery>;
export type TrackSuspenseQueryHookResult = ReturnType<typeof useTrackSuspenseQuery>;
export type TrackQueryResult = Apollo.QueryResult<TrackQuery, TrackQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...Me
  }
}
    ${MeFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
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