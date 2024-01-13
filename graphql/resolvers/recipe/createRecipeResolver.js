const db = require('../../../models');

const createRecipeResolver = async (_, { recipe },context) => {
    const { title,
        description,
        ingredients,
        instructions,
        imageUrl,
        } = recipe;
    let { dateCreated } = recipe;
    if (!dateCreated) dateCreated = new Date();
    const newRecipe = await db.Recipe.create({
        title,
        description,
        ingredients,
        instructions,
        imageUrl,
        dateCreated,
        user_id:context.user_id
    });

    return newRecipe;
}

module.exports = createRecipeResolver;