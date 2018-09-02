import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  notificationBarContainer: {
    borderColor: 'black',
    marginVertical: 2,
    borderWidth: 1,
  },
  listItem: {
    margin: 10,
    flexDirection: 'row',
  },
  messageContainer: {
    flex: 5,
    alignItems: 'flex-start',
  },
  message: {
    fontSize: 20,
    color: 'grey',
  },
  bellIcon: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 15,
  },
});
