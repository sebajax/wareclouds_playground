// Module Imports
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
// import helmet from 'helmet';
// import cors from 'cors';
import mongoose from 'mongoose';
import config from './config/mongodb.config';

// Require App routes
import indexRouter from './routes/index';
import cloudersRouter from './routes/clouders';

require('dotenv').config();

const app = express();

app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  },
}));

// app.use(cors());
// app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
* START DEFINING API ROUTES
*/
app.use('/', indexRouter);
app.use('/clouders', cloudersRouter);
/*
* END DEFINING API ROUTES
*/

// Mongo Connect
(async () => {
  try {
    await mongoose.connect(config.HOST, config.OPTIONS);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.log('Hubo un error al conectarse a MongoDB');
  }
})();

app.listen(process.env.PORT, () => {
  console.log(`APP running on PORT - ${process.env.PORT}`);
});

module.exports = app;
