import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../containers/screens/Login/Login';
import Register from '../containers/screens/Login/Register';

const StackNavigatorOptions = {
  headerShown: true,
};

const AppNavigator = createStackNavigator(
  {
    Register: { screen: Register },
    Login: { screen: Login },
    
  },
  { defaultNavigationOptions: StackNavigatorOptions }
);

export default createAppContainer(AppNavigator);
