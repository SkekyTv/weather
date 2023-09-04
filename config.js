import 'dotenv/config';

const config = {
  weather: {
    api: process.env.WEATHER_API_ENDPOINT,
    key: process.env.WEATHER_API_KEY,
  },
};

export default config;
