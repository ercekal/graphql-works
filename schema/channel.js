export default `
  type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    public: Boolean!
    team: Team!
    users: [User!]!
  }
`;
