const config = {
  port: process.env.API_PORT || 3000,
  auth: {
    secret: process.env.API_AUTH_SECRET || 'BIo4l8S5AwHqP0MVQpsQ760ZOaLhfXwHqP0OlK76Hb',
    maxAge: process.env.API_AUTH_SECRET || 3600,
  },
};

export default config;
