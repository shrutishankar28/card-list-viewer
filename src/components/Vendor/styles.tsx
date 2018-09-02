import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#FAF8F8',
  },
  vendor: {
    flex: 5,
    fontSize: 13,
  },
  location: {
    flex: 1,
    fontSize: 13,
  },
  price: {
    flex: 1,
    color: 'red',
    justifyContent: 'flex-end',
    fontSize: 13,
  },
  name: {
    flex: 1,
    fontSize: 13,
  },
});
