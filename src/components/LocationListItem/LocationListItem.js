import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getDayAndTime } from '../../common/utils';

const LocationListItem = ({
  location: {
    id,
    address: { city, country, street },
    date,
    geoPoint: { latitude, longitude },
    weather: { temp, humidity, windSpeed, description, icon },
  },
  onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.info}>
      <Text style={styles.addressTitle}>
        {city}, {country}, {street}
      </Text>
      <Text style={styles.coordinates}>
        latitude: {latitude.toFixed(2)} longitude: {longitude.toFixed(2)}
      </Text>
    </View>
    <View style={styles.dateContainer}>
      {getDayAndTime(date).map((item) => (
        <Text key={id + item} style={styles.date}>
          {item}
        </Text>
      ))}
    </View>
    <View style={styles.weather}>
      <Text style={styles.weatherProperty}>
        {temp.toFixed(0)}
        <Text style={styles.weatherUnit}>°C</Text>
      </Text>
    </View>
  </TouchableOpacity>
);

export default LocationListItem;
