export default `
  type Message {
    id: Int!
    text: String!
    channel: Channel!
    user: User!
  }

  type Mutation {
    createMessage(channel_id: Int!, text: String!): Boolean!
  }
`;
