import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import WeatherWidget from '../../components/WeatherWidget';
import styles from './styles';
import colors from '../../common/colors';

const MapScreen = ({
  initialPosition,
  address,
  weatherInfo,
  isHistoryShow,
  date: { visitedDay, visitedTime },
}) => (
  <View style={styles.container}>
    {isHistoryShow && (
      <Text style={styles.date}>
        {`You were here ${visitedDay} at ${visitedTime}`}
      </Text>
    )}
    <View style={[styles.mapContainer, isHistoryShow && styles.nebula]}>
      <WeatherWidget
        initialPosition={initialPosition}
        address={address}
        weatherInfo={weatherInfo}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        followsUserLocation
        zoomEnabled={!isHistoryShow}
        rotateEnabled={!isHistoryShow}
        scrollEnabled={!isHistoryShow}
        mapPadding={{ top: 100 }}
        region={initialPosition}
      />
    </View>
  </View>
);

export default MapScreen;
