import express from 'express';

import { isAuthenticated } from '../services/authentication';
import products from '../models/product.model';

const handlers = [
  express.Router().get('/api/products', async (req, res) => {
    const listOfProducts = await products.find({});

    throw Error('TEST');

    res.send(listOfProducts);
  }),
  express.Router().post('/api/products', isAuthenticated, async (req, res) => {
    const product = req.body;

    const productDDBB = await products.create(product);

    res.send(productDDBB);
  }),
  express.Router().delete('/api/products/:productid', isAuthenticated, async (req, res) => {
    const { productid } = req.params;

    await products.deleteOne({ _id: productid });

    res.send();
  }),
];

export default (app) => {
  app.use(handlers);
};
