import { NativeBaseProvider } from 'native-base';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { CatalogScreen } from 'screens/CatalogScreen';
// import { SignInScreen } from 'screens/SignInScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <SignInScreen /> */}
      <CatalogScreen />
    </NativeBaseProvider>
  );
}
