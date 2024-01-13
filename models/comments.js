'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comments.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      // models.Comments.belongsTo(models.Recipe, {
      //   foreignKey: 'recipe_id'
      // });
    }
  }
  Comments.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
    comment_text: DataTypes.STRING,
    date_liked: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};