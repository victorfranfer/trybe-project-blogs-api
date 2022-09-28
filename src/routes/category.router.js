const express = require('express');

const categoryController = require('../controllers/category.controller');
const validate = require('../middlewares/validateCategory.js');
const validateToken = require('../middlewares/validateToken');

const routers = express.Router();

routers.post('/', validateToken, validate, categoryController.createCategory);
routers.get('/', validateToken, categoryController.getCategories);

module.exports = routers;