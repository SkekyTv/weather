import bodyParser from 'body-parser';
import express from 'express';

// const aboutRouter = require("./routes/about");
import aboutRouter from './routes/about';
import weatherRouter from './routes/weather';

const PORT = 3000;
const HOST_NAME = 'localhost';

const app = express();
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/weather", weatherRouter);
app.use('/about', aboutRouter);

app.listen(
  PORT,
  HOST_NAME,
  // eslint-disable-next-line
  () => { console.log(`Server running at ${HOST_NAME}:${PORT}`); },
);
