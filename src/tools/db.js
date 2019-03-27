/* eslint-disable no-console */
import mongoose from 'mongoose';

import constants from '../config/constants';

mongoose.Promise = global.Promise;
mongoose.set('debug', constants.debugMongoose);

try {
  mongoose.connect(constants.mongoURL);
} catch (err) {
  mongoose.createConnection(constants.mongoURL);
}

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
}).on('error', (e) => {
  throw e;
});
