const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', 
  {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  PostCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategoryTable,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'post_id',
      otherKey: 'category_id'
    });
  }

  return PostCategoryTable;
}

module.exports = PostCategorySchema;