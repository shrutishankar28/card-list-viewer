import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './styles';
import { TaggedTextType } from '../../utils/typeDefinitions';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  data: TaggedTextType;
}

interface State {}

export default class TaggedText extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.iconContainer}>
          <MaterialCommunityIcons name="tag" size={15} color="#F5F513" />
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.text}>
            {this.props.data.season} {this.props.data.year} >{' '}
            {this.props.data.gender} > {this.props.data.category}
          </Text>
        </View>
        <View style={{ flex: 0.5 }} />
      </View>
    );
  }
}
