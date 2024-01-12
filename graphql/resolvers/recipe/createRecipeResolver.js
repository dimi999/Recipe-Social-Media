const db = require('../../../models');

const createRecipeResolver = async (_, { recipe }) => {
    const {title,
        description,
        ingredients,
        instructions,
        imageUrl,
        dateCreated } = recipe;
    const newUser = await db.Recipe.create({
        title,
        description,
        ingredients,
        instructions,
        imageUrl,
        dateCreated
    });

    console.log('recipe aici');

    return newUser;
}

module.exports = createRecipeResolver;