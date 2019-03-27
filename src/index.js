import express from 'express';

import constants from './config/constants';
import handlers from './handlers';

const app = express();

app.use(express.json());

handlers(app);

app.listen(constants.port, () =>
  console.log(`NodeApi on port ${constants.port}`),
);