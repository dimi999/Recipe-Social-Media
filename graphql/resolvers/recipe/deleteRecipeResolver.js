const db = require('../../../models');

const createRecipeResolver = async (_,args) => {
    console.log(args)
    const { id } = args;
    console.log(id)
    const targetRecipe = await db.Recipe.findByPk(id);

    if (!targetRecipe) {
        throw new Error('Recipe not found');
    }

    try {
        await targetRecipe.destroy();

        return true;
    } catch (error) {
        new Error(`Error deleting user: ${error.message}`);
    }
}

module.exports = createRecipeResolver;