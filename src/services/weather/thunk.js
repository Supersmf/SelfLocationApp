import api from './weatherApi';
import { weatherInfoDmToVm } from './weatherTransformers';

export const fetchLocalWeather = async (latitude, longitude, isMetric) => {
  try {
    const units = isMetric ? 'metric' : 'imperial';
    const weatherInfo = await api.fetchLocalWeather(latitude, longitude, units);

    return weatherInfoDmToVm(weatherInfo);
  } catch (err) {
    console.warn(err);
  }
};
