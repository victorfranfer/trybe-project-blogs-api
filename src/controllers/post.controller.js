const postService = require('../services/post.service');

const createPost = async (req, res) => {
  const { id } = req.locals;

  const result = await postService.createPost({ ...req.body, userId: id });

  return res.status(201).json(result);
};

module.exports = {
  createPost,
};