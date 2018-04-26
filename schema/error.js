export default `
  type Error {
    path: String!
    message: String
  }

  type Mutation {
    createChannel(name: String!, team_id: Int!, public: Boolean=false): Boolean!
  }
`;
