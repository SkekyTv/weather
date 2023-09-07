import axios from 'axios';
import config from '../../config';

const getWeather = async (lat, lng) => {
  const response = await axios.get(config.weather.url, {
    params: {
      latitude: lat,
      longitude: lng,
      daily: 'temperature_2m_min,temperature_2m_max,weathercode',
      timezone: 'Europe/Paris',
      current_weather: true,
    },
  });

  return response.data;
};

export default getWeather;
