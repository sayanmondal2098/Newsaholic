import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigations/Navigator';
import OnboardingScreen from './src/containers/screens/OnboardingScreen';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="AppNavigation" component={AppNavigator} />
      </AppStack.Navigator>
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
