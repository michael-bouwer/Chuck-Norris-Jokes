const { gql } = require("apollo-server");

const typeDefs = gql`
  type Category {
    name: String
  }

  type Joke {
    icon_url: String
    id: String!
    url: String
    value: String
  }

  type Query {
    categories: [Category],
    randomJoke (category: String!): Joke
  }
`;

module.exports = typeDefs;
