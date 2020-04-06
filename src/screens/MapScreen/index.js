import React, { useState, useCallback, useEffect } from 'react';
import MapScreen from './MapScreen';
import Geolocation from '@react-native-community/geolocation';
import { DEFAULT_POSITION_PROPS } from '../../common/constants';
import { fetchLocalWeather } from '../../services/weather/thunk';
import { addLocation, getGeoPoint } from '../../services/firebase/thunk';
import {
  getLocationAddress,
  isLocationPermissionGranted,
} from '../../services/location';
import { getDayAndTime } from '../../common/utils';

const MapScreenContainer = ({ route: { params } }) => {
  const [initialPosition, setInitialPosition] = useState(
    params
      ? {
          ...DEFAULT_POSITION_PROPS,
          latitude: params.geoPoint.latitude,
          longitude: params.geoPoint.longitude,
        }
      : DEFAULT_POSITION_PROPS,
  );
  const [address, setAddress] = useState(params?.address || '');
  const [weather, setWeather] = useState(params?.weather || {});

  const getCurrentPositionInfoUpdate = useCallback(async () => {
    const isPermissionGranted = await isLocationPermissionGranted();

    if (isPermissionGranted) {
      Geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          try {
            const addressInfo = await getLocationAddress(latitude, longitude);
            const weatherInfo = await fetchLocalWeather(
              latitude,
              longitude,
              true,
            );
            const [street, city, country] = addressInfo.split(', ');

            setInitialPosition({
              ...DEFAULT_POSITION_PROPS,
              latitude,
              longitude,
            });
            setAddress({ street, city, country });
            setWeather(weatherInfo);
            addLocation({
              address: { street, city, country },
              weather: weatherInfo,
              geoPoint: getGeoPoint(+latitude, +longitude),
            });
          } catch (err) {
            console.warn(err);
          }
        },
        (error) => console.warn(error.message),
      );
    }
  }, []);

  useEffect(() => {
    if (!params) {
      getCurrentPositionInfoUpdate();
    }
  }, []);

  const [visitedDay, visitedTime] = getDayAndTime(params?.date);

  return (
    <MapScreen
      initialPosition={initialPosition}
      address={address}
      weatherInfo={weather}
      isHistoryShow={!!params}
      date={{ visitedDay, visitedTime }}
    />
  );
};

export default MapScreenContainer;
