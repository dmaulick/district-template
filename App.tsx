import { NativeBaseProvider } from 'native-base';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { CatalogScreen } from 'screens/CatalogScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <CatalogScreen />
    </NativeBaseProvider>
  );
}
