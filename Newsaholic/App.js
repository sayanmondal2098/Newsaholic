import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import NavStack from './src/navigations/Navigator';
import OnboardingScreen from './src/containers/screens/OnboardingScreen';
import Login from "./src/containers/screens/Login/Login";
import Loading from "./src/containers/screens/Loading/Loading";
import Register from "./src/containers/screens/Login/Register"
import { Router, Stack, Scene } from 'react-native-router-flux'

const AppStack = createStackNavigator();
const RootStack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (

          <Router>
            <Scene key="root" hideNavBar={true} showLabel={false}>
              <Scene key="loading" component={Loading} hideNavBar={true} showLabel={false}/>
              <Scene key="OnboardingScreen" component={OnboardingScreen} hideNavBar={true} showLabel={false} />
              <Scene key="login" component={Login} hideNavBar={true} showLabel={false}/>
              <Scene key="register" component={Register} hideNavBar={true} showLabel={false}/>
            </Scene>
          </Router>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
