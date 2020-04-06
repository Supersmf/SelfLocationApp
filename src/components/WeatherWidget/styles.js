import { StyleSheet } from 'react-native';
import colors from '../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.casper,
    position: 'absolute',
    height: 100,
    fontSize: 0,
    left: 10,
    top: 10,
    right: 10,
    borderRadius: 10,
    zIndex: 100,
    padding: 5,
  },
  weather: {
    flex: 2,
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 4,
    alignItems: 'center',
  },
  cityTitle: {
    fontSize: 16,
    lineHeight: 16,
    height: 16,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  streetTitle: {
    fontSize: 12,
    color: colors.dark,
    textAlign: 'center',
  },
  icon: {
    height: 120,
    width: 120,
    top: -30,
    position: 'absolute',
  },
  info: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coordinates: {
    fontSize: 12,
    color: colors.secondary,
  },
  weatherDescription: {
    fontSize: 12,
    color: colors.dark,
    bottom: 0,
    position: 'absolute',
  },
  weatherProperty: {
    fontSize: 16,
    color: colors.secondary,
  },
  weatherUnit: {
    fontSize: 8,
  },
  spinner: {
    flex: 1,
  },
});
