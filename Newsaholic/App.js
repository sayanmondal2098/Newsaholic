import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigations/Navigator';
import OnboardingScreen from './src/containers/screens/OnboardingScreen';
import Login from "./src/containers/screens/Login/Login";

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingScreen/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
