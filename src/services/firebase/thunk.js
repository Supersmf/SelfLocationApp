import api from './firebaseApi';
import { firebase } from '@react-native-firebase/firestore';

export const addLocation = async (location) => {
  try {
    const { empty } = await api.getDuplicateLocation(location);

    if (empty) {
      await api.addLocation(location);
    }
  } catch (err) {
    console.warn(err);
  }
};

export const fetchLocations = async (lastLocation, callback) => {
  try {
    const { docs } = await api.fetchLocations(lastLocation);

    return docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.warn(err);
  } finally {
    callback();
  }
};

export const getGeoPoint = (latitude: number, longitude: number) =>
  new firebase.firestore.GeoPoint(latitude, longitude);
