const userService = require('../services/user.services');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);

  if (result.type === 'INVALID_FIELD') return res.status(400).json(result.message);

  if (result.type === 'USER_ALREADY_REGISTERED') return res.status(409).json(result.message);

  return res.status(201).json(result);
};

module.exports = {
  createUser,
};