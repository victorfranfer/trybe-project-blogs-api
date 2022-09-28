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

const authenticateToken = async (token) => {
  if (!token) {
    return { type: 'TOKEN_NOT_FOUND', message: 'Token not found' };
  }

  try {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    return validateToken;
  } catch (error) {
    return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};