import React from 'react';
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { NavigationState, NavigationScreenProp } from 'react-navigation';
import { CardType, TaggedTextType } from '../../utils/typeDefinitions';
import TitleBar from '../../components/TitleBar';
import TaggedText from '../../components/TaggedText';
import Vendor from '../../components/Vendor';
import { map } from 'lodash';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface State {
  activeImage: string;
}

export default class CardDetails extends React.Component<Props, State> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<NavigationState>;
  }) => {
    return {
      headerTitle: (
        <TitleBar
          imageUrl={navigation.getParam('imageUrl')}
          caption={navigation.getParam('caption')}
        />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    };
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      activeImage: '',
    };
  }

  _keyExtractor = (item: string, index: number) => index.toString();

  _onPressTaggedImage = (imageUri: string) => {
    this.setState({
      activeImage: imageUri,
    });
  };

  _renderTaggedImage = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity onPress={() => this._onPressTaggedImage(item)}>
        <Image style={Styles.taggedImage} source={{ uri: item }} />
      </TouchableOpacity>
    );
  };

  render() {
    const cardData: CardType = this.props.navigation.getParam(
      'cardDetails',
      {}
    );
    return (
      <View style={Styles.container}>
        <View style={Styles.imageContainer}>
          <Image
            style={Styles.cardImage}
            source={{
              uri: this.state.activeImage
                ? this.state.activeImage
                : cardData.imageUrl,
            }}
          />
        </View>
        <View style={Styles.taggedImagesContainer}>
          <FlatList
            data={cardData.taggedImages}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderTaggedImage}
            horizontal={true}
          />
        </View>
        <View style={Styles.vendorDetailsContainer}>
          <Vendor data={cardData.vendorData} />
        </View>
        <View style={Styles.taggedTextContainer}>
          {map(cardData.taggedTexts, (item: TaggedTextType, index: number) => {
            return <TaggedText data={item} key={index} />;
          })}
        </View>
        <View style={Styles.notesContainer}>
          <Text> {'<Notes>Lorem Ipsum Lorem Ipsum Lorem Ipsum'}</Text>
        </View>
      </View>
    );
  }
}
