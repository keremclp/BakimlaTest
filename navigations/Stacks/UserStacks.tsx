import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const UserStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default UserStacks

const styles = StyleSheet.create({})