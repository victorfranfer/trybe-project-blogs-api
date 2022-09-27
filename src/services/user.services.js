const { User } = require('../models');

const { generateToken } = require('../utils/JWT');
const validateInputs = require('../validation/validateInputValues');

const getUser = async ({ email, password }) => {
  const result = await User.findOne({ where: { email, password } });

  const token = generateToken(result);

  return token;
};

const createUser = async ({ displayName, email, password, image }) => {
  const validate = await validateInputs.validateNewUser({ displayName, email, password, image });

  if (validate.type) return validate;
  
  try {
    const result = await User.create({ displayName, email, password, image });
    return result;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = {
  getUser,
  createUser,
};