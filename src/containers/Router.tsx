import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CardDetails from './CardDetails';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CardDetails,
  },
  {
    initialRouteName: 'Home',
  }
);
