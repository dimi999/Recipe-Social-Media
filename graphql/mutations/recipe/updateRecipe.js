const updateRecipeResolver = require('../../resolvers/recipe/updateRecipeResolver.js');
const recipeType = require('../../types/recipe/recipeType.js');
const updateRecipeInputType = require('../../types/recipe/updateRecipeInputType');


const updateRecipe = {
    type: recipeType,
    args: {
        recipe: {
            type: updateRecipeInputType,
        }
    },
    resolve: updateRecipeResolver
};

module.exports = updateRecipe;