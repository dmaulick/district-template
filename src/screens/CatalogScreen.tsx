import { Box, Text, VStack } from 'native-base';
import React, { memo, useMemo } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Screen } from './Screen';

const gutter = 3;
const maxCardSize = 300;

const longText = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ';

const Card = memo(({ title, description }: { title: string, description: string }) => (
  <Box maxWidth={maxCardSize}>
    <VStack backgroundColor="blue.100" borderRadius="sm" padding={gutter}>
      <Text bold fontSize="md" paddingBottom={2}>{title}</Text>
      <Text numberOfLines={5}>{description}</Text>
    </VStack>
  </Box>
));

type DataType = { title: string, description: string };
type FlatListDataType = ListRenderItemInfo<DataType>;
const data: DataType[] = [{ title: 'Card Title 1', description: longText }, { title: 'Card Title 2', description: longText }, { title: 'Card Title 3', description: longText }, { title: 'Card Title 4', description: longText }, { title: 'Card Title 5', description: longText }, { title: 'Card Title 6', description: longText }, { title: 'Card Title 7', description: longText }];

const renderCard = ({ item: { title, description } }: FlatListDataType) => (
  <Box marginLeft={gutter}>
    <Card title={title} description={description} />
  </Box>
);
const keyExtractor = (item: DataType, index: number) => `${item.title}-${index}`;

const HFlatlist = memo(() => (
  <FlatList<DataType>
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={keyExtractor}
    data={data}
    renderItem={renderCard}
  />
));

const renderSection = () => (
  <Box marginBottom={gutter}>
    <Text marginLeft={gutter} fontSize="md" marginBottom={2}>Section Title</Text>
    <HFlatlist />
  </Box>
);

const CatalogScreenContent = memo(() => {
  const header = useMemo(() => (
    <Box marginX={gutter}>
      <VStack paddingTop={5} paddingBottom={8}>
        <Text bold fontSize="lg" paddingBottom={2}>Page Title</Text>
        <Text numberOfLines={5}>{longText}</Text>
      </VStack>
    </Box>
  ), []);

  return (
    <>
      {header}
      <FlatList<DataType>
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderSection}
      />
    </>
  );
});

// eslint-disable-next-line import/prefer-default-export
export const CatalogScreen = memo(() => (
  <Screen>
    <CatalogScreenContent />
  </Screen>
));
