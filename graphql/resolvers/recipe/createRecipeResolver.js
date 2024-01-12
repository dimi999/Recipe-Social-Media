const db = require('../../../models');

const createRecipeResolver = async (_, { recipe }, context) => {
    const userId = context.req.raw.user
    const {
        title,
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

    console.log('user aici');

    return newUser;
}

module.exports = createRecipeResolver;