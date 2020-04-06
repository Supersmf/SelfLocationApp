import { StyleSheet } from 'react-native';
import colors from '../../common/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.casper,
    height: 70,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weather: {
    flex: 1,
    justifyContent: 'center',
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  date: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  addressTitle: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    flex: 3,
    height: 38,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coordinates: {
    fontSize: 12,
    color: colors.secondary,
  },
  weatherProperty: {
    fontSize: 27,
    color: colors.dark,
    textAlign: 'center',
  },
  weatherUnit: {
    fontSize: 18,
  },
});
