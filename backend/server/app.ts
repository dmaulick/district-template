import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { setupDB } from './src/config/databaseConnection.js';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {  
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

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