const express = require('express');

const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validateUser');

const routers = express.Router();

routers.post('/', validate, userController.createUser);

module.exports = routers;