import { connectStore } from './connectStore';
import { firebase } from '@react-native-firebase/firestore';
import { ITEMS_PER_PAGE } from '../../common/constants';

const connection = connectStore.collection('locations').orderBy('date');

const addLocation = (location) =>
  connectStore.collection('locations').add({
    ...location,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  });

const fetchLocations = (lastLocation) => {
  if (lastLocation) {
    return connection.startAfter(lastLocation.date).limit(ITEMS_PER_PAGE).get();
  }

  return connection.limit(ITEMS_PER_PAGE).get();
};

const getDuplicateLocation = ({ geoPoint }) =>
  connectStore.collection('locations').where('geoPoint', '==', geoPoint).get();

export default {
  addLocation,
  fetchLocations,
  getDuplicateLocation,
};
