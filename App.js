import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} backgroundColor="blue.800">
        <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
          Hello
        </Text>
      </Box>
    </NativeBaseProvider>
  );
}