const { User } = require('../models');

const { generateToken } = require('../utils/JWT');

const getUser = async ({ email, password }) => {
  const result = await User.findOne({ where: { email, password } });

  const token = generateToken(result);

  return token;
};

const createUser = async ({ email, password }) => {
  try {
    const result = await User.create({ email, password });
    return result;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = {
  getUser,
  createUser,
};