const { User } = require('../models');

const validateUser = async (req, res, next) => {
  const { email } = req.body;

  const result = await User.findOne({ where: { email } });

  if (result) return res.status(409).json({ message: 'User already registered' });

  return next();
};

module.exports = validateUser;