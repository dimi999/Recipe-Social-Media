'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Tag.belongsTo(models.RecipeTag, {
        foreignKey: 'id'
      });
      models.Recipe.belongsTo(models.RecipeTag, {
        foreignKey: 'id'
      });
    }
  }
  RecipeTag.init({
    recipe_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecipeTag',
  });
  return RecipeTag;
};