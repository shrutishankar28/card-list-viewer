import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { TaggedTextType } from '../../utils/typeDefinitions';

interface Props {
  imageUrl: string;
  caption: string;
}

interface State {}

export default class TitleBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Image style={Styles.cardImage} source={{ uri: this.props.imageUrl }} />
        <View style={Styles.captionContainer}>
          <Text style={Styles.cardCaption}>{this.props.caption}</Text>
        </View>
      </View>
    );
  }
}
