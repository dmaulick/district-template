import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { setupDB } from './src/config/databaseConnection.js';
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    hello: String
    books: [Book]
  }


  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

const resolvers = {
  Query: {  
    hello: () => 'Hello world!',
    books: () => books,
  },
  Mutation: {
    addBook: (title: string, author: string) => {
      const newBook = {
        title,
        author,
      };
      console.log('New book:\n', newBook);
      books.push(newBook);
      return books;
    }
  }
};

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded', 
});

setupDB(v => console.log(v));
const app = express();

const startServer = async () => {
    await server.start(); 
    server.applyMiddleware({ app, cors: true });
}

startServer();

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);