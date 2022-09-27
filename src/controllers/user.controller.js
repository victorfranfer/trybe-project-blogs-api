const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);

  if (result.type === 'INVALID_FIELD') return res.status(400).json({ message: result.message });

  return res.status(201).json({ token: result });
};

module.exports = {
  createUser,
};