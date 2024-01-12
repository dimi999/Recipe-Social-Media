const db = require('../../../models');

const updateRecipeResolver = async (_, { recipe },context) => {
    try {
        console.log(recipe)
        const {
            id,
            user_id,
            title,
            description,
            ingredients,
            instructions,
            imageUrl,
            dateCreated,
        } = recipe;

        const targetRecipe = await db.Recipe.findByPk(id);

        if (!targetRecipe) {
            throw new Error('Recipe not found');
        }

        if (parseInt(targetRecipe.user_id) !== parseInt(context.user_id)) {
            throw new Error('Permission denied');
        }

        if (title !== undefined) targetRecipe.title = title;
        if (description !== undefined) targetRecipe.description = description;
        if (ingredients !== undefined) targetRecipe.ingredients = ingredients;
        if (instructions !== undefined) targetRecipe.instructions = instructions;
        if (imageUrl !== undefined) targetRecipe.imageUrl = imageUrl;
        if (dateCreated !== undefined) targetRecipe.date_created = dateCreated;

        await targetRecipe.save();

        return targetRecipe;
    } catch (error) {
        throw new Error(`Error updating recipe: ${error.message}`);
    }
};

module.exports = updateRecipeResolver;