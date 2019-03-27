import jwt from 'jsonwebtoken';

import constants from '../config/constants';

const TEST_USER_NAME = 'test';
const TEST_USER_PASSWORD = 'test';

async function verifyJWTToken(token) {
  const arr = token.split(' ');
  if (arr[0] === 'Bearer') {
    console.log(token);
    return jwt.verify(arr[1], constants.auth.secret);
  }
  throw new Error('Token not valid!');
}

async function createJWToken(userData) {
  return jwt.sign(
    {
      data: userData,
    },
    constants.auth.secret,
    {
      expiresIn: constants.auth.maxAge,
      algorithm: 'HS256',
    },
  );
}

/**
 * Check if the user is authenticated.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  verifyJWTToken(token)
    .then((decodedToken) => {
      req.user = decodedToken.data;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(401).send('Not authorized');
    });
};

export const logIn = async (userName, password) => {
  // For this example we use a static user
  if (userName === TEST_USER_NAME && password === TEST_USER_PASSWORD) {
    const user = {
      userName: TEST_USER_NAME,
    };

    const token = await createJWToken(user);

    return {
      token,
    };
  }

  return {
    token: null,
    error: 'INVALID_USER',
  };
};
