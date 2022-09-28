const { BlogPost, Category } = require('../models');

const createPost = async ({ title, content, userId, categoryIds }) => {
  const published = Date.now();

  const post = await BlogPost.create(
    { title, content, userId, published, categoryIds },
  );

  const categories = await Category.findAll({ where: { id: categoryIds } });

  await post.addCategory(categories, { through: { selfGranted: false } });

  return post;
};

module.exports = {
  createPost,
};