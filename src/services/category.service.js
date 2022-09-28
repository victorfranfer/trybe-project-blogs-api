const { Category } = require('../models');

const createCategory = async (name) => {
  const result = await Category.create({ name });

  return result;
};

const getCategories = async () => {
  const result = await Category.findAll();

  return result;
};

const getCategoriesByIds = async (categoryIds) => {
  const result = await Category.findAll({ where: { id: categoryIds } });

  return result;
};

module.exports = {
  createCategory,
  getCategories,
  getCategoriesByIds,
};