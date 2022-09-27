const { addUserSchema } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = addUserSchema.validate(user);

  if (error) return { type: 'INVALID_FIELD', message: error.message };

  return { type: null };
};

module.exports = {
  validateNewUser,
};