const express = require('express');

const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validateFields');

const routers = express.Router();

routers.post('/', validate, userController.getUser);

module.exports = routers;