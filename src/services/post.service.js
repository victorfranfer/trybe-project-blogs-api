const { BlogPost, User, Category } = require('../models');

const createPost = async ({ title, content, userId, categoryIds }) => {
  const published = Date.now();

  const post = await BlogPost.create(
    { title, content, userId, published, categoryIds },
  );

  const categories = await Category.findAll({ where: { id: categoryIds } });

  await post.addCategory(categories, { through: { selfGranted: false } });

  return post;
};

const getPosts = async (id) => {
  const result = await BlogPost.findAll({
    where: { userId: id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  });
  return result;
};

module.exports = {
  createPost,
  getPosts,
};