const { gql } = require("apollo-server");

const typeDefs = gql`

  type Joke {
    categories: [String],
    created_at: String,
    icon_url: String,
    updated_at: String,
    id: String
    url: String
    value: String
  }

  type SearchResults {
    total: Int,
    result: [Joke]
  }

  type Query {
    categories: [String],
    randomJoke (category: String!): Joke
    searchJoke (searchText: String!): SearchResults
  }
`;

module.exports = typeDefs;
