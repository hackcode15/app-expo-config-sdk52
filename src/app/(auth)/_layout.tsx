/* import { Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Text>AuthLayout</Text>
    </Stack>
  )
}

export default AuthLayout; */

import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;