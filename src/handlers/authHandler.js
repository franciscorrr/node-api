import express from 'express';

import { logIn } from '../services/authentication';

const handlers = [
  express.Router().post('/api/user/login', async (req, res) => {
    const { userName, password } = req.body || {};

    console.log(req.body);

    const resultAuth = await logIn(userName, password);
    res.send(resultAuth);
  }),
];

export default (app) => {
  app.use(handlers);
};
