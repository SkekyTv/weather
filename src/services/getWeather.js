import axios from 'axios';

const getWeather = async (lat, lng) => {
  const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
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
