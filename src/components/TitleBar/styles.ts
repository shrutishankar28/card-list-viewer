import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    flex: 1,
    height: 30,
    width: 20,
    marginRight: 10,
  },
  captionContainer: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardCaption: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
