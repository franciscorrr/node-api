import express from 'express';

import constants from './config/constants';


const app = express();

app.listen(constants.port, () =>
  console.log(`NodeApi on port ${constants.port}`),
);