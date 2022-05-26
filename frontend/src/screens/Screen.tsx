import { VStack } from 'native-base';
import React, { memo, ReactNode } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const Screen = memo(({ children }: { children: ReactNode}) => (
  <VStack safeAreaTop flex={1}>
    {children}
  </VStack>
));
