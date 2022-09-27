const express = require('express');

const loginController = require('../controllers/login.controller');
const validate = require('../middlewares/validateFields');

const routers = express.Router();

routers.post('/', validate, loginController.login);

module.exports = routers;