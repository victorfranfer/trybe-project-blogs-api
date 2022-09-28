const express = require('express');

const postController = require('../controllers/post.controller');
const validate = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

const routers = express.Router();

routers.post('/', validateToken, validate, postController.createPost);
routers.get('/', validateToken, postController.getPosts);

module.exports = routers;