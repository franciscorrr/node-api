const config = {
  port: process.env.API_PORT || 3000,
  mongoURL: process.env.MONGO_URL || 'mongodb://10.100.125.30:27017/node-api',
  debugMongoose: process.env.MONGO_URL || false,
  auth: {
    secret: process.env.API_AUTH_SECRET || 'BIo4l8S5AwHqP0MVQpsQ760ZOaLhfXwHqP0OlK76Hb',
    maxAge: process.env.API_AUTH_SECRET || 3600,
  },
};

export default config;
