import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface State {}

export default class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
