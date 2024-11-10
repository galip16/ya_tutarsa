
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Match {
    id:ID!
    date: String!
    homeTeam: String!
    awayTeam: String!
    homeScore: Int
    awayScore: Int
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    match(id:ID!):Match
    matches: [Match!]!
  }

  type Mutation {
    createUser(id: String!, name: String!, email: String!): User!
    saveMatches: [Match!]!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

`;
