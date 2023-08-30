import bodyParser from "body-parser";
import express from "express";
// const aboutRouter = require("./routes/about");
// const weatherRouter = require("./routes/weather");
import aboutRouter from './routes/about.js';

const PORT = 3000;
const HOST_NAME = "localhost";

const app = express();
app.use(express.static("client"));
app.use(bodyParser.urlencoded({extended : true}));

// app.use("/weather", weatherRouter);
app.use("/about", aboutRouter);

app.listen(PORT, HOST_NAME,
           () => {console.log(`Server running at ${HOST_NAME}:${PORT}`)})
