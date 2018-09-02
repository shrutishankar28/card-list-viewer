import React from 'react';
import { Text, View, FlatList, StatusBar } from 'react-native';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import { Styles } from './styles';
import Card from '../../components/Card';
import { CardType } from '../../utils/typeDefinitions';
import { cardList } from '../../store/data';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface State {}

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  };

  constructor(props: Props) {
    super(props);
  }

  _keyExtractor = (item: CardType, index: number) => index.toString();

  _onPressItem = (item: CardType) => {
    this.props.navigation.navigate('Details', {
      cardDetails: item,
      caption: item.caption,
      imageUrl: item.imageUrl,
    });
  };

  _renderItem = ({ item }: { item: CardType }) => {
    return (
      <Card id={item.id} cardItem={item} onPressItem={this._onPressItem} />
    );
  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          data={cardList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          horizontal={false}
          style={Styles.listContainer}
          numColumns={2}
        />
      </View>
    );
  }
}
