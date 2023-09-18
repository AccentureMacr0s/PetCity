// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationScreen from './screens/RegistrationScreen';
import HomeScreen from './screens/HomeScreen';
// Import other screens as needed

const AppNavigator = createStackNavigator(
  {
    Registration: RegistrationScreen,
    Home: HomeScreen,
    Map: MapScreen, // Import and add the Map screen here
    Profile: ProfileScreen, // Import and add the Profile screen here
  },
  {
    initialRouteName: 'Registration',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
