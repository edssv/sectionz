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
  }

  type TrackIncrementPlayCountResponse {
    playCount: Int!
  }

  type Query {
    emailAvailable(email: String!): Boolean
    me: UsersPermissionsMe
    trackIncrementPlayCount(trackId: ID!): TrackIncrementPlayCountResponse!
  }

  type Mutation {
    updateUserProfile(data: UpdateUserProfileInput): UsersPermissionsUserEntityResponse!
    updateUserNotifications(data: UpdateUserNotificationsInput): UsersPermissionsUserEntityResponse!
  }
`;
