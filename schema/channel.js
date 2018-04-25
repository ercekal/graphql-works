export default `
  type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    public: Boolean!
    team: Team!
    users: [User!]!
  }

  type Mutation {
    createChannel(name: String!, team_id: Int!, public: Boolean=false): Boolean!
  }
`;
