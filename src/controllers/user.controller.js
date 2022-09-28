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

const getUser = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getUser(id);
  if (result.type) return res.status(404).json({ message: result.message });
  return res.status(200).json(result);
};

module.exports = {
  createUser,
  getUsers,
  getUser,
};