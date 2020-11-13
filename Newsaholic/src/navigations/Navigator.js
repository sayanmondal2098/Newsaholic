import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Login from '../containers/screens/Login/Login';
import Register from '../containers/screens/Login/Register';
import OnboardingScreen from "../containers/screens/OnboardingScreen";

const RootStack = createStackNavigator();


export default function NavStack() {
  return (
    <RootStack.Navigator>
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Register" component={Register} />
    </RootStack.Navigator>
  );
}
