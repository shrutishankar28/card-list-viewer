import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    flexDirection: 'column',
    borderRadius: 5,
    margin: 15,
  },
  cardImage: {
    height: width / 2,
    width: width / 2.3,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 4,
  },
  cardCaption: {
    fontSize: 13,
    color: 'blue',
  },
});
