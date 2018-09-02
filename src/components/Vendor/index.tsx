import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { VendorType } from '../../utils/typeDefinitions';

interface Props {
  data: VendorType;
}

interface State {}

export default class Vendor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.vendor}>
          {' '}
          {this.props.data.vendor} {this.props.data.name}
          {', '}
          {this.props.data.location}
        </Text>
        <Text style={Styles.price}>{this.props.data.price}</Text>
      </View>
    );
  }
}
