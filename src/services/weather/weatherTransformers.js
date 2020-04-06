export const weatherInfoDmToVm = ({
  data: {
    weather,
    main: { temp, pressure, humidity },
    wind: { speed: windSpeed },
  },
}) => ({
  temp,
  pressure,
  windSpeed,
  humidity,
  description: weather[0].description,
  icon: weather[0].icon,
});
