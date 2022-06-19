import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { setupDB } from './src/config/databaseConnection.js';
import { resolvers, typeDefs } from './src/graphql/schema.js';

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