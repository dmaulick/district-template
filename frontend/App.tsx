import { NativeBaseProvider } from 'native-base';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { CatalogScreen } from 'screens/CatalogScreen';
// import { SignInScreen } from 'screens/SignInScreen';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        {/* <SignInScreen /> */}
        <CatalogScreen />
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
