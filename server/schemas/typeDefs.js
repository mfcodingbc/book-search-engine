// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create the typeDefs
const typeDefs = gql`
  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(savedBooks: BookInput): User
    removeBook(bookId: String!): User
  }

  input BookInput {
    _id: ID!
    "The id of the book taken from Google Books page"
    bookId: String!
    authors: [String!]
    description: String!
    title: String!
    image: String!
    link: String!
  }
`;

// export the typeDefs
module.exports = typeDefs;
