import Koa from 'koa';
import router from 'koa-route';
import config from '../config';
import aboutRouter from './routes/about';
import weatherRouter from './routes/weather';

const app = new Koa();

// basic logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(router.get('/about', aboutRouter));
app.use(router.get('/weather', weatherRouter.get));

app.listen(
  config.port,
  config.host,
  // eslint-disable-next-line
  () => { console.log(`Server running at ${config.host}:${config.port}`); },
);
