const { User } = require('../models');

const { generateToken } = require('../utils/JWT');
const validateInputs = require('../validate/validateInputValues');

const login = async ({ email, password }) => {
  const result = await User.findOne({ where: { email } });

  if (!result || result.dataValues.password !== password) {
    return { type: 'INVALID_FIELD', message: 'Invalid fields' };
  }

  const token = generateToken(result.dataValues);

  return { token };
};

const createUser = async ({ displayName, email, password, image }) => {
  const validate = validateInputs.validateNewUser({ displayName, email, password, image });

  if (validate.type) return validate;

  try {
    const result = await User.create({ displayName, email, password, image });

    const token = generateToken(result.dataValues);

    return token;
  } catch (error) {
    return { message: error.message };
  }
};

const getUsers = async () => {
  const result = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

  return result;
};

module.exports = {
  login,
  createUser,
  getUsers,
};