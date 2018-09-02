import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import { Styles } from './styles';
import { Notification } from '../../utils/typeDefinitions';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface State {}

const notificationData = [
  {
    message: 'ASDF liked your post',
  },
  {
    message: 'ASDF liked your post',
  },
  {
    message: 'ASDF liked your post',
  },
  {
    message: 'ASDF liked your post',
  },
  {
    message: 'ASDF liked your post',
  },
];

export default class Notifications extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Notifications',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  };

  _keyExtractor = (item: Notification, index: number) => index.toString();

  _renderItem = ({ item }: { item: Notification }) => {
    return (
      <View style={Styles.listItem}>
        <MaterialCommunityIcons
          name="bell"
          size={25}
          color="gray"
          style={Styles.bellIcon}
        />
        <View style={Styles.messageContainer}>
          <Text style={Styles.message}>{item.message}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          data={notificationData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
