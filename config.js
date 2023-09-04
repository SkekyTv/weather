import 'dotenv/config';

const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  weather: {
    api: process.env.WEATHER_API_ENDPOINT,
    key: process.env.WEATHER_API_KEY,
  },
};

export default config;
