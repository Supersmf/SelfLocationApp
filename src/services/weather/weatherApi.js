import axios from 'axios';
import { WEATHER_API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(
  (req) => {
    req.params = {
      ...req.params,
      APPID: WEATHER_API_KEY,
    };

    return req;
  },
  (error) => Promise.reject(error),
);

const fetchLocalWeather = (lat, lon, units) =>
  api.get('/weather', { params: { lat, lon, units } });

export default {
  fetchLocalWeather,
};
