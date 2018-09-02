import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardImage: {
    height: height / 2,
    width,
  },
  cardCaption: {
    fontSize: 10,
    color: 'blue',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 6.5,
  },
  taggedImagesContainer: {
    flex: 1.4,
  },
  taggedImage: {
    height: width / 6,
    width: width / 6,
    margin: 3,
  },
  vendorDetailsContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taggedTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: '#FAF8F8',
  },
  notesContainer: {
    flex: 0.5,
    justifyContent: 'flex-start',
    padding: 2,
  },
});
