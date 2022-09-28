const express = require('express');

const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

const routers = express.Router();

routers.post('/', validate, userController.createUser);
routers.get('/', validateToken, userController.getUsers);
routers.get('/:id', validateToken, userController.getUser);

module.exports = routers;