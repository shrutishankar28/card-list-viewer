import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import CardDetails from '../CardDetails';

export const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: CardDetails },
});
