import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../containers/screens/Login/Login';
import Register from '../containers/screens/Login/Register';

const StackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
  },
  { defaultNavigationOptions: StackNavigatorOptions }
);

export default createAppContainer(AppNavigator);
