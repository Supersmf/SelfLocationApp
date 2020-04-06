import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({
  emptySpinner: {
    alignSelf: 'center',
    marginTop: screenHeight / 3,
  },
  loadMoreSpinner: {
    alignSelf: 'center',
  },
});
