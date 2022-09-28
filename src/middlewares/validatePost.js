const categoryService = require('../services/category.service');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const result = await categoryService.getCategoriesByIds(categoryIds);

  if (result.length === 0) return res.status(400).json({ message: '"categoryIds" not found' });

  return next();
};

module.exports = validatePost;