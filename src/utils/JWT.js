const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = ({ id, displayName, email, image }) => {
  const payload = {
    id,
    displayName,
    email,
    image,
  };

  const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

  const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);

  return token;
};

module.exports = {
  generateToken,
};