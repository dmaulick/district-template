import { gql } from "apollo-server-express";
import { books, CreateBookMutation } from "./mutation/BooksMutation.js";
import { CreateNoteMutation, DeleteNoteMutation, UpdateNoteMutation } from "./mutation/NotesMutation.js";
import { NotesQuery } from "./query/NotesQuery.js";

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Note {
    content: String
  }

  type Query {
    hello: String
    books: [Book]
    notes: [Note]
  }

  type Mutation {
    createBook(title: String, author: String): Book
    createNote(content: String): Note
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    books: () => books,
    notes: NotesQuery,
  },
  Mutation: {
    createBook: CreateBookMutation,
    createNote: CreateNoteMutation,
  }
};