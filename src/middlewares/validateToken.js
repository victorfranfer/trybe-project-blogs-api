const { authenticateToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  const validate = await authenticateToken(authorization);

  if (validate.type) return res.status(401).json({ message: validate.message });

  req.locals = validate;
  return next();
};

module.exports = validateToken;