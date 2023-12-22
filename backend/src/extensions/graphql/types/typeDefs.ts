export const typeDefs = `
  input UsersPermissionsRegisterInput {
    username: String!
    email: String!
    password: String!
    profileName: String!
    dob: DateTime!
    gender: ENUM_USERSPERMISSIONSUSER_GENDER!
    marketingEmails: Boolean
  }

  input UpdateUserProfileInput {
    profileName: String
    dob: DateTime
    gender: ENUM_USERSPERMISSIONSUSER_GENDER
  }

  input UpdateUserNotificationsInput {
    marketingEmails: Boolean
    socialEmails: Boolean
    communicationEmails: Boolean
  }

  type CheckUserSavedAlbumsResponse {
    albums: [SavedStatus]
  }

  type CheckUserSavedTracksResponse {
    tracks: [SavedStatus]
  }

  type FollowedStatus {
    isFollowed: Boolean
  }

  type SavedStatus {
    isSaved: Boolean
  }

  type TrackIncrementPlayCountResponse {
    playCount: Int!
  }

  type UsersPermissionsMe {
    id: ID!
    username: String!
    profileName: String
    email: String!
    image: UploadFile
    dob: DateTime
    gender: ENUM_USERSPERMISSIONSUSER_GENDER
    confirmed: Boolean
    blocked: Boolean
    role: UsersPermissionsMeRole
    socialEmails: Boolean!
    communicationEmails: Boolean!
    marketingEmails: Boolean!
    savedAlbums: [SavedAlbum]
    savedTracks: [SavedTrack]
  }

  type Query {
    checkUserSavedAlbums(albums: [ID]!): CheckUserSavedAlbumsResponse
    checkUserSavedTracks(tracks: [ID]!): CheckUserSavedTracksResponse
    emailAvailable(email: String!): Boolean
    me: UsersPermissionsMe
    trackIncrementPlayCount(trackId: ID!): TrackIncrementPlayCountResponse!
    userTopItems: Boolean
  }

  type Mutation {
    createFollowingArtist(artistId: ID!): FollowedStatus!
    createSavedAlbum(albumId: ID!): SavedStatus!
    createSavedTrack(trackId: ID!): SavedStatus!
    deleteFollowingArtist(artistId: ID!): FollowedStatus!
    deleteSavedAlbum(albumId: ID!): SavedStatus!
    deleteSavedTrack(trackId: ID!): SavedStatus!
    updateUserProfile(data: UpdateUserProfileInput): UsersPermissionsUserEntityResponse!
    updateUserNotifications(data: UpdateUserNotificationsInput): UsersPermissionsUserEntityResponse!
  }
`;
