import { TextArea, TextField } from 'native-base';
import React, { memo, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Screen } from './Screen';

const SignInScreenContent = memo(() => {
  const [thing, setThing] = useState();
  return (
    <>
    </>
  );
});

// <TextArea autoCompleteType="p">Hello1</TextArea>
// <TextField>Hellow2</TextField>

// eslint-disable-next-line import/prefer-default-export
export const SignInScreen = memo(() => (
  <Screen>
    <SignInScreenContent />
  </Screen>
));
