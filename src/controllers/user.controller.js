const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);

  if (result.type === 'INVALID_FIELD') return res.status(400).json({ message: result.message });

  return res.status(201).json({ token: result });
};

const getUsers = async (_req, res) => {
  const result = await userService.getUsers();
  return res.status(200).json(result);
};

module.exports = {
  createUser,
  getUsers,
};