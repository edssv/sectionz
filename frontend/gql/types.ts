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
  readonly __typename?: 'Album';
  readonly albumType: Enum_Album_Albumtype;
  readonly artist: Maybe<ArtistEntityResponse>;
  readonly cover: UploadFileEntityResponse;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly duration: Scalars['Float']['output'];
  readonly genre: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly releaseDate: Scalars['DateTime']['output'];
  readonly tracks: Maybe<TrackRelationResponseCollection>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type AlbumTracksArgs = {
  filters: InputMaybe<TrackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type AlbumEntity = {
  readonly __typename?: 'AlbumEntity';
  readonly attributes: Maybe<Album>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type AlbumEntityResponse = {
  readonly __typename?: 'AlbumEntityResponse';
  readonly data: Maybe<AlbumEntity>;
};

export type AlbumEntityResponseCollection = {
  readonly __typename?: 'AlbumEntityResponseCollection';
  readonly data: ReadonlyArray<AlbumEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type AlbumFiltersInput = {
  readonly albumType: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<AlbumFiltersInput>>>;
  readonly artist: InputMaybe<ArtistFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly duration: InputMaybe<FloatFilterInput>;
  readonly genre: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<AlbumFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<AlbumFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly releaseDate: InputMaybe<DateTimeFilterInput>;
  readonly tracks: InputMaybe<TrackFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type AlbumInput = {
  readonly albumType: InputMaybe<Enum_Album_Albumtype>;
  readonly artist: InputMaybe<Scalars['ID']['input']>;
  readonly cover: InputMaybe<Scalars['ID']['input']>;
  readonly duration: InputMaybe<Scalars['Float']['input']>;
  readonly genre: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly releaseDate: InputMaybe<Scalars['DateTime']['input']>;
  readonly tracks: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type AlbumRelationResponseCollection = {
  readonly __typename?: 'AlbumRelationResponseCollection';
  readonly data: ReadonlyArray<AlbumEntity>;
};

export type Artist = {
  readonly __typename?: 'Artist';
  readonly albums: Maybe<AlbumRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly image: Maybe<UploadFileEntityResponse>;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly tracks: Maybe<TrackRelationResponseCollection>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ArtistAlbumsArgs = {
  filters: InputMaybe<AlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ArtistTracksArgs = {
  filters: InputMaybe<TrackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ArtistEntity = {
  readonly __typename?: 'ArtistEntity';
  readonly attributes: Maybe<Artist>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ArtistEntityResponse = {
  readonly __typename?: 'ArtistEntityResponse';
  readonly data: Maybe<ArtistEntity>;
};

export type ArtistEntityResponseCollection = {
  readonly __typename?: 'ArtistEntityResponseCollection';
  readonly data: ReadonlyArray<ArtistEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ArtistFiltersInput = {
  readonly albums: InputMaybe<AlbumFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ArtistFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ArtistFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ArtistFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly tracks: InputMaybe<TrackFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ArtistInput = {
  readonly albums: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly tracks: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
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
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Album | Artist | I18NLocale | Like | Track | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type Like = {
  readonly __typename?: 'Like';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly track: Maybe<TrackEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly user: Maybe<UsersPermissionsUserEntityResponse>;
};

export type LikeEntity = {
  readonly __typename?: 'LikeEntity';
  readonly attributes: Maybe<Like>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type LikeEntityResponse = {
  readonly __typename?: 'LikeEntityResponse';
  readonly data: Maybe<LikeEntity>;
};

export type LikeEntityResponseCollection = {
  readonly __typename?: 'LikeEntityResponseCollection';
  readonly data: ReadonlyArray<LikeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LikeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LikeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<LikeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LikeFiltersInput>>>;
  readonly track: InputMaybe<TrackFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type LikeInput = {
  readonly track: InputMaybe<Scalars['ID']['input']>;
  readonly user: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createAlbum: Maybe<AlbumEntityResponse>;
  readonly createArtist: Maybe<ArtistEntityResponse>;
  readonly createLike: Maybe<LikeEntityResponse>;
  readonly createTrack: Maybe<TrackEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteAlbum: Maybe<AlbumEntityResponse>;
  readonly deleteArtist: Maybe<ArtistEntityResponse>;
  readonly deleteLike: Maybe<LikeEntityResponse>;
  readonly deleteTrack: Maybe<TrackEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateAlbum: Maybe<AlbumEntityResponse>;
  readonly updateArtist: Maybe<ArtistEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateLike: Maybe<LikeEntityResponse>;
  readonly updateTrack: Maybe<TrackEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly updateUserNotifications: UsersPermissionsUserEntityResponse;
  readonly updateUserProfile: UsersPermissionsUserEntityResponse;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
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
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
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
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly album: Maybe<AlbumEntityResponse>;
  readonly albums: Maybe<AlbumEntityResponseCollection>;
  readonly artist: Maybe<ArtistEntityResponse>;
  readonly artists: Maybe<ArtistEntityResponseCollection>;
  readonly emailAvailable: Maybe<Scalars['Boolean']['output']>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly like: Maybe<LikeEntityResponse>;
  readonly likes: Maybe<LikeEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly track: Maybe<TrackEntityResponse>;
  readonly trackIncrementPlayCount: TrackIncrementPlayCountResponse;
  readonly tracks: Maybe<TrackEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAlbumArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAlbumsArgs = {
  filters: InputMaybe<AlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArtistArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryArtistsArgs = {
  filters: InputMaybe<ArtistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
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
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLikeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLikesArgs = {
  filters: InputMaybe<LikeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
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
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Track = {
  readonly __typename?: 'Track';
  readonly album: Maybe<AlbumEntityResponse>;
  readonly artist: Maybe<ArtistEntityResponse>;
  readonly audio: UploadFileEntityResponse;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly duration: Maybe<Scalars['Float']['output']>;
  readonly genre: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly playCount: Maybe<Scalars['Int']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TrackEntity = {
  readonly __typename?: 'TrackEntity';
  readonly attributes: Maybe<Track>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type TrackEntityResponse = {
  readonly __typename?: 'TrackEntityResponse';
  readonly data: Maybe<TrackEntity>;
};

export type TrackEntityResponseCollection = {
  readonly __typename?: 'TrackEntityResponseCollection';
  readonly data: ReadonlyArray<TrackEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type TrackFiltersInput = {
  readonly album: InputMaybe<AlbumFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<TrackFiltersInput>>>;
  readonly artist: InputMaybe<ArtistFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly duration: InputMaybe<FloatFilterInput>;
  readonly genre: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<TrackFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<TrackFiltersInput>>>;
  readonly playCount: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type TrackIncrementPlayCountResponse = {
  readonly __typename?: 'TrackIncrementPlayCountResponse';
  readonly playCount: Scalars['Int']['output'];
};

export type TrackInput = {
  readonly album: InputMaybe<Scalars['ID']['input']>;
  readonly artist: InputMaybe<Scalars['ID']['input']>;
  readonly audio: InputMaybe<Scalars['ID']['input']>;
  readonly duration: InputMaybe<Scalars['Float']['input']>;
  readonly genre: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly playCount: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type TrackRelationResponseCollection = {
  readonly __typename?: 'TrackRelationResponseCollection';
  readonly data: ReadonlyArray<TrackEntity>;
};

export type UpdateUserNotificationsInput = {
  readonly communicationEmails: InputMaybe<Scalars['Boolean']['input']>;
  readonly marketingEmails: InputMaybe<Scalars['Boolean']['input']>;
  readonly socialEmails: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateUserProfileInput = {
  readonly dob: InputMaybe<Scalars['DateTime']['input']>;
  readonly gender: InputMaybe<Enum_Userspermissionsuser_Gender>;
  readonly profileName: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly communicationEmails: Scalars['Boolean']['output'];
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly dob: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly gender: Maybe<Enum_Userspermissionsuser_Gender>;
  readonly id: Scalars['ID']['output'];
  readonly image: Maybe<UploadFile>;
  readonly marketingEmails: Scalars['Boolean']['output'];
  readonly profileName: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly socialEmails: Scalars['Boolean']['output'];
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly dob: Scalars['DateTime']['input'];
  readonly email: Scalars['String']['input'];
  readonly gender: Enum_Userspermissionsuser_Gender;
  readonly marketingEmails: InputMaybe<Scalars['Boolean']['input']>;
  readonly password: Scalars['String']['input'];
  readonly profileName: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly communicationEmails: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly dob: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly gender: Maybe<Enum_Userspermissionsuser_Gender>;
  readonly image: Maybe<UploadFileEntityResponse>;
  readonly marketingEmails: Maybe<Scalars['Boolean']['output']>;
  readonly profileName: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly socialEmails: Maybe<Scalars['Boolean']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly communicationEmails: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly dob: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly gender: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly marketingEmails: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly profileName: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly socialEmails: InputMaybe<BooleanFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly communicationEmails: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly dob: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly gender: InputMaybe<Enum_Userspermissionsuser_Gender>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly marketingEmails: InputMaybe<Scalars['Boolean']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly profileName: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly socialEmails: InputMaybe<Scalars['Boolean']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type AlbumListQueryVariables = Exact<{ [key: string]: never; }>;


export type AlbumListQuery = { readonly __typename?: 'Query', readonly albums: { readonly __typename?: 'AlbumEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly genre: string, readonly albumType: Enum_Album_Albumtype, readonly duration: number, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly tracks: { readonly __typename?: 'TrackRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'TrackEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Track', readonly name: string, readonly duration: number, readonly playCount: number, readonly audio: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string } } }, readonly album: { readonly __typename?: 'AlbumEntityResponse', readonly data: { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string } } } } }> }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } } } }> } };

export type AlbumFragment = { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly genre: string, readonly albumType: Enum_Album_Albumtype, readonly duration: number, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly tracks: { readonly __typename?: 'TrackRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'TrackEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Track', readonly name: string, readonly duration: number, readonly playCount: number, readonly audio: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string } } }, readonly album: { readonly __typename?: 'AlbumEntityResponse', readonly data: { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string } } } } }> }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } } } };

export type GetAlbumQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAlbumQuery = { readonly __typename?: 'Query', readonly album: { readonly __typename?: 'AlbumEntityResponse', readonly data: { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly genre: string, readonly albumType: Enum_Album_Albumtype, readonly duration: number, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly tracks: { readonly __typename?: 'TrackRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'TrackEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Track', readonly name: string, readonly duration: number, readonly playCount: number, readonly audio: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string } } }, readonly album: { readonly __typename?: 'AlbumEntityResponse', readonly data: { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string } } } } }> }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } } } } } };

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { readonly __typename?: 'Mutation', readonly changePassword: { readonly __typename: 'UsersPermissionsLoginPayload' } };

export type EmailAvailableQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type EmailAvailableQuery = { readonly __typename?: 'Query', readonly emailAvailable: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { readonly __typename?: 'Mutation', readonly forgotPassword: { readonly __typename?: 'UsersPermissionsPasswordPayload', readonly ok: boolean } };

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { readonly __typename?: 'Mutation', readonly login: { readonly __typename?: 'UsersPermissionsLoginPayload', readonly jwt: string, readonly user: { readonly __typename?: 'UsersPermissionsMe', readonly id: number, readonly username: string, readonly email: string } } };

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { readonly __typename?: 'Mutation', readonly register: { readonly __typename?: 'UsersPermissionsLoginPayload', readonly jwt: string, readonly user: { readonly __typename?: 'UsersPermissionsMe', readonly id: number, readonly username: string, readonly email: string } } };

export type ResetPasswordMutationVariables = Exact<{
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { readonly __typename?: 'Mutation', readonly resetPassword: { readonly __typename: 'UsersPermissionsLoginPayload', readonly user: { readonly __typename?: 'UsersPermissionsMe', readonly email: string } } };

export type TrackIncrementPlayCountQueryVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type TrackIncrementPlayCountQuery = { readonly __typename?: 'Query', readonly trackIncrementPlayCount: { readonly __typename?: 'TrackIncrementPlayCountResponse', readonly playCount: number } };

export type TrackListQueryVariables = Exact<{
  filters: InputMaybe<TrackFiltersInput>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type TrackListQuery = { readonly __typename?: 'Query', readonly tracks: { readonly __typename?: 'TrackEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'TrackEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Track', readonly name: string, readonly duration: number, readonly playCount: number, readonly audio: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string } } }, readonly album: { readonly __typename?: 'AlbumEntityResponse', readonly data: { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string } } } } }> } };

export type TrackFragment = { readonly __typename?: 'TrackEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Track', readonly name: string, readonly duration: number, readonly playCount: number, readonly audio: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string } } }, readonly album: { readonly __typename?: 'AlbumEntityResponse', readonly data: { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string } } } } };

export type TrackQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TrackQuery = { readonly __typename?: 'Query', readonly track: { readonly __typename?: 'TrackEntityResponse', readonly data: { readonly __typename?: 'TrackEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Track', readonly name: string, readonly duration: number, readonly playCount: number, readonly audio: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string } } }, readonly album: { readonly __typename?: 'AlbumEntityResponse', readonly data: { readonly __typename?: 'AlbumEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Album', readonly name: string, readonly releaseDate: any, readonly cover: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } }, readonly artist: { readonly __typename?: 'ArtistEntityResponse', readonly data: { readonly __typename?: 'ArtistEntity', readonly id: number, readonly attributes: { readonly __typename?: 'Artist', readonly name: string } } } } } } };

export type MeFragment = { readonly __typename?: 'UsersPermissionsMe', readonly id: number, readonly username: string, readonly email: string, readonly profileName: string, readonly dob: any, readonly gender: Enum_Userspermissionsuser_Gender, readonly marketingEmails: boolean, readonly communicationEmails: boolean, readonly socialEmails: boolean, readonly image: { readonly __typename?: 'UploadFile', readonly url: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { readonly __typename?: 'Query', readonly me: { readonly __typename?: 'UsersPermissionsMe', readonly id: number, readonly username: string, readonly email: string, readonly profileName: string, readonly dob: any, readonly gender: Enum_Userspermissionsuser_Gender, readonly marketingEmails: boolean, readonly communicationEmails: boolean, readonly socialEmails: boolean, readonly image: { readonly __typename?: 'UploadFile', readonly url: string } } };

export type UpdateUserNotificationsMutationVariables = Exact<{
  data: InputMaybe<UpdateUserNotificationsInput>;
}>;


export type UpdateUserNotificationsMutation = { readonly __typename?: 'Mutation', readonly updateUserNotifications: { readonly __typename: 'UsersPermissionsUserEntityResponse' } };

export type UpdateUserProfileMutationVariables = Exact<{
  data: UpdateUserProfileInput;
}>;


export type UpdateUserProfileMutation = { readonly __typename?: 'Mutation', readonly updateUserProfile: { readonly __typename: 'UsersPermissionsUserEntityResponse' } };

export type UserFragment = { readonly __typename?: 'UsersPermissionsUserEntity', readonly id: number, readonly attributes: { readonly __typename?: 'UsersPermissionsUser', readonly username: string, readonly profileName: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } };

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
      ...Album
    }
  }
}
    ${AlbumFragmentDoc}`;

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