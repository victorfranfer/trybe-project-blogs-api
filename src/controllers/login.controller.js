const userService = require('../services/user.services');

const login = async (req, res) => {
  const result = await userService.login(req.body);

  if (result.type === 'INVALID_FIELD') return res.status(400).json({ message: result.message });

  return res.status(200).json({ token: result.token });
};

module.exports = {
  login,
};