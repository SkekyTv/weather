import express from 'express';
import axios from 'axios';
import config from '../../config';

const weatherRoute = express.Router();

// const options = new Options({
//   prefixUrl: config.weather.api,
//   searchParams: {
//     appid: config.weather.key,
//     q: 'Nancy,fr',
//   },
// });

weatherRoute.get('/', async (req, res) => {
  // const response = await got('/weather', options).json();
  // console.log(response);
  let response;
  try {
    response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.6844&longitude=6.185&hourly=temperature_2m');
  } catch (e) {
    console.log(e);
  }
  console.log(response);
  res.json({
    weather: 'pluie',
  });
});

export default weatherRoute;
