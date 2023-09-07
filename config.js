import 'dotenv/config';

const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  weather: {
    url: process.env.WEATHER_API_ENDPOINT,
    key: process.env.WEATHER_API_KEY,
  },
  geocode: {
    url: process.env.GEOCODE_URL || 'http://city:3010/geocode',
  },
};

export default config;
