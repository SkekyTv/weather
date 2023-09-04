import axios from 'axios';

const weatherRoute = {
  get: async (ctx) => {
    let response;
    try {
      response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.6844&longitude=6.185&hourly=temperature_2m');
    } catch (e) {
      console.log(e);
    }
    console.log(response.data);
    ctx.body = {
      weather: 'pluie',
    };
  },
};

export default weatherRoute;
