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

  type Query {
    emailAvailable(email: String!): Boolean
  }

  type Mutation {
    updateUserProfile(data: UpdateUserProfileInput): UsersPermissionsUserEntityResponse!
  }

  type Mutation {
    updateUserNotifications(data: UpdateUserNotificationsInput): UsersPermissionsUserEntityResponse!
  }
`;
