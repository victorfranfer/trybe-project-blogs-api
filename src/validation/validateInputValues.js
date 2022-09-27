const { addUserSchema } = require('./schemas');
const { User } = require('../models');

const validateNewUser = async (user) => {
  const { error } = addUserSchema.validate(user);

  console.log(error);

  if (error) return { type: 'INVALID_FIELD', message: error.message };

  const result = await User.findOne({ where: { email: user.email } });

  if (result) return { type: 'USER_ALREADY_REGISTERED', message: 'User already registered' };

  return { type: null };
};

module.exports = {
  validateNewUser,
};