import React from 'react';
import { View, Text, Image } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from '../../common/colors';
import Spinner from 'react-native-spinkit';

const Loader = () => (
  <Spinner
    style={styles.spinner}
    color={colors.secondary}
    size={80}
    type={'ThreeBounce'}
  />
);

const WeatherWidget = ({
  initialPosition: { latitude, longitude },
  address: { street, city, country },
  weatherInfo: { temp, windSpeed, humidity, description, icon },
}) => (
  <View style={styles.container}>
    {country ? (
      <>
        <View style={styles.info}>
          <Text style={styles.cityTitle}>
            {city}, {country}
          </Text>
          <Text style={styles.streetTitle}>{street}</Text>
          <Text style={styles.coordinates}>
            latitude: {latitude.toFixed(2)}
          </Text>
          <Text style={styles.coordinates}>
            longitude: {longitude.toFixed(2)}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
          />
          <Text style={styles.weatherDescription} numberOfLines={1}>
            {description}
          </Text>
        </View>
        <View style={styles.weather}>
          <Text style={styles.weatherProperty}>
            <FA5Icon
              name="temperature-high"
              size={16}
              color={colors.secondary}
            />
            {` ${temp?.toFixed(0)}`}
            <Text style={styles.weatherUnit}> °C</Text>
          </Text>
          <Text style={[styles.weatherProperty, { left: -4 }]}>
            <MCIcon name="water-outline" size={18} color={colors.secondary} />
            {` ${humidity?.toFixed(0)}`}
            <Text style={styles.weatherUnit}> %</Text>
          </Text>
          <Text style={styles.weatherProperty}>
            <FA5Icon name="wind" size={14} color={colors.secondary} />
            {` ${windSpeed?.toFixed(0)}`}
            <Text style={styles.weatherUnit}> m/s</Text>
          </Text>
        </View>
      </>
    ) : (
      <Loader />
    )}
  </View>
);

export default WeatherWidget;
