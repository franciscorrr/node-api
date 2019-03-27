import products from './productHandler';
import auth from './authHandler';

export default (app) => {
  products(app);
  auth(app);
};
