/* eslint-disable no-console */
import express from 'express';

import constants from './config/constants';
import handlers from './handlers';
import './tools/db';

const app = express();

app.use(express.json());

handlers(app);

app.listen(constants.port, () => console.log(`NodeApi on port ${constants.port}`));
