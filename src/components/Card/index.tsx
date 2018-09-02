import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { CardType } from '../../utils/typeDefinitions';

interface Props {
  id: string;
  cardItem: CardType;
  onPressItem: (cardItem: CardType) => void;
}

interface State {}

export default class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  _onPress = () => {
    this.props.onPressItem(this.props.cardItem);
  };

  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={this._onPress}>
          <Image
            style={Styles.cardImage}
            source={{ uri: this.props.cardItem.imageUrl }}
          />
          <View style={Styles.textContainer}>
            <Text style={Styles.cardCaption}>
              {this.props.cardItem.caption}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
