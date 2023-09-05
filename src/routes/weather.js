import axios from 'axios';
import config from '../../config';
import services from '../services';

const weatherRoute = {
  location: async (ctx) => {
    const { lat, lng } = ctx.query;

    let weatherData;
    try {
      weatherData = await services.getWeather(lat, lng);
    } catch (e) {
      ctx.throw(e);
    }

    ctx.body = {
      weather: weatherData,
    };
  },
  city: async (ctx) => {
    const { city } = ctx.query;
    let cityGeocode;
    try {
      cityGeocode = await axios.get(`${config.geocode.url}/city`, {
        params: {
          city,
        },
      });
    } catch (e) {
      ctx.throw(e);
    }

    const { lat, lng } = cityGeocode.data.geometry.location;

    let weatherData;
    try {
      weatherData = await services.getWeather(lat, lng);
    } catch (e) {
      ctx.throw(e);
    }
    ctx.body = {
      city: cityGeocode.data,
      weather: weatherData,
    };
  },
};

export default weatherRoute;
