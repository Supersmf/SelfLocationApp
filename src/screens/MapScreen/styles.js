import { StyleSheet } from 'react-native';
import colors from '../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    width: '100%',
    flex: 10,
  },
  map: {
    flex: 1,
  },
  history: {
    width: '100%',
    flex: 1,
  },
  nebula: {
    marginBottom: 50,
    width: '80%',
    opacity: 0.8,
    borderWidth: 0.5,
  },
  dataContainer: {},
  date: {
    margin: 15,
    fontSize: 18,
    textAlign: 'center',
    color: colors.dark,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});
