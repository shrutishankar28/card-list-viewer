import { createStackNavigator } from 'react-navigation';
import Notifications from '../Notifications';

export const NavigationStack = createStackNavigator({
  Notifications: { screen: Notifications },
});
