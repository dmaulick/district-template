import React, { memo, ReactNode, useMemo } from 'react';
import { Box, NativeBaseProvider, ScrollView, Text, VStack } from 'native-base';

const longText = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ';

const Card = memo(({ title, description }: { title: string, description: string }) => (
  <Box paddingBottom={4}>
    <VStack backgroundColor="blue.100" borderRadius="sm" padding={2}>
      <Text bold fontSize="md" paddingBottom={2}>{title}</Text>
      <Text numberOfLines={5}>{description}</Text>
    </VStack>
  </Box>
));

const data = [{ title: 'Card Title 1', description: longText }, { title: 'Card Title 2', description: longText }, { title: 'Card Title 3', description: longText }, { title: 'Card Title 4', description: longText }, { title: 'Card Title 5', description: longText }, { title: 'Card Title 6', description: longText }, { title: 'Card Title 7', description: longText }];

const Content = memo(() => {
  const header = useMemo(() => (
    <VStack paddingTop={5} paddingBottom={8}>
      <Text bold fontSize="md" paddingBottom={2}>Page Title</Text>
      <Text numberOfLines={5}>{longText}</Text>
    </VStack>
  ), []);

  return (
    <ScrollView>
      {header}
      {data.map(({ title, description }) => (<Card title={title} description={description} />))}
    </ScrollView>
  );
});

const Screen = memo(({ children }: { children: ReactNode}) => (
  <NativeBaseProvider>
    <VStack safeAreaTop flex={1} marginX={3}>
      {children}
    </VStack>
  </NativeBaseProvider>
));

export default function App() {
  return (
    <Screen>
      <Content />
    </Screen>
  );
}
