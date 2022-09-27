const userService = require('../services/user.services');

const login = async (req, res) => {
  const token = await userService.getUser(req.body);

  if (!token) return res.status(400).json({ message: 'Invalid fields' });

  return res.status(200).json(token);
};

module.exports = {
  login,
};