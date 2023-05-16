import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Home'
import Chart from '../Chart'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackedScreens = () => {
  return (
    <Stack.Navigator screenOptions = {{ headerShown: false }}>
    <Stack.Screen    name          = "HomeScreen" component  = {Home} />
    <Stack.Screen    name          = "ChartScreen" component = {Chart} />
    </Stack.Navigator>
  )
}

export default StackedScreens

const styles = StyleSheet.create({})