import Geocoder from 'react-native-geocoding';
import { PERMISSIONS, request } from 'react-native-permissions';
import { Platform } from 'react-native';
import { GOOGLE_API_KEY } from 'react-native-dotenv';

export const getLocationAddress = async (latitude, longitude) => {
  Geocoder.init(GOOGLE_API_KEY);
  try {
    const { results } = await Geocoder.from(latitude, longitude);

    return results[0].formatted_address;
  } catch (err) {
    console.warn(err);
  }
};

export const isLocationPermissionGranted = async () => {
  const locationPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  try {
    const permissionResponse = await request(locationPermission);

    return permissionResponse === 'granted';
  } catch (err) {
    console.warn(err);
  }
};
