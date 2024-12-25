import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator();
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
