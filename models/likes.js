'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Likes.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      // models.Likes.belongsTo(models.Recipe, {
      //   foreignKey: 'recipe_id'
      // });
    }
  }
  Likes.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
    date_liked: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};