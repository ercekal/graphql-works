export default `
  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }

  type Message {
    id: Int!
    text: String!
    channel: Channel!
    user: User!
  }

  type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    public: Boolean!
    team: Team!
    users: [User!]!
  }

  type User {
    id: Int!
    username: String!
    email: String!
    messages: Message!
    teams: [Team!]!
  }

  type Query {
    hi: String
  }
`;
