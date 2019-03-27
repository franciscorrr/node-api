import express from 'express';

import { isAuthenticated } from '../services/authentication';

const handlers = [
  express.Router().get('/api/products', async (req, res) => {
    res.send([]);
  }),
  express.Router().post('/api/products', isAuthenticated, async (req, res) => {
    res.send({ result: [] });
  }),
  express.Router().delete('/api/products', isAuthenticated, async (req, res) => {
    res.send({ result: [] });
  }),
];

export default (app) => {
  app.use(handlers);
};
