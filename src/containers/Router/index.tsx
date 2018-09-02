import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { HomeStack } from './HomeStack';
import { NavigationStack } from './NavigationStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const RootStack = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Notifications: { screen: NavigationStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Notifications') {
          iconName = `bell${focused ? '' : '-outline'}`;
        }
        return (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
