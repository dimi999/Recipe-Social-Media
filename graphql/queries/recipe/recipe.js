const {
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const RecipeType = require('../../types/recipe/recipeType');
const db = require('../../../models');

const recipeQuery = {
    type: RecipeType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: (_, args) => {
        const { id } = args;
        return db.Recipe.findByPk(id);
    }

}

module.exports = recipeQuery;