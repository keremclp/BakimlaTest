import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStacks from './Stacks/UserStacks'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from '../screens/PaymentScreen';
import { RootStackParamList } from './types';
import RtkQueryScreen from '../screens/RtkQueryScreen';
import PostDetailScreen from '../screens/PostDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"User"}
      >
        <Stack.Screen name="User" component={UserStacks} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="RtkQuery" component={RtkQueryScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})