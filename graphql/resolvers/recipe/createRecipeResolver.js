const db = require('../../../models');

// Function to get the latest recipe ID
async function getLatestRecipeId() {
    const latestRecipe = await db.Recipe.findOne({
        order: [['id', 'DESC']],
    });

    return latestRecipe.id
}


const createRecipeResolver = async (_, {recipe}) => {
    const {
        user_id,
        title,
        description,
        ingredients,
        instructions,
        imageUrl
    } = recipe;
    let {dateCreated} = recipe;
    if (!dateCreated) dateCreated = new Date();
    const newRecipe = await db.Recipe.create({
        title,
        description,
        ingredients,
        instructions,
        imageUrl,
        dateCreated,
        user_id
    });

    let {tags} = recipe
    // Fetch the latest recipe ID
    const latestRecipeId = await getLatestRecipeId();

    if (latestRecipeId !== null) {
        tags = await db.Tag.findAll({
            where: { tag_name: tags },
        });

        // Fetch existing associations for the latest recipe
        const existingAssociations = await db.RecipeTag.findAll({
            where: {recipe_id: latestRecipeId},
        });

        const existingTagIds = existingAssociations.map((association) => association.tag_id);
        // Find tags that are missing an association with the latest recipe
        const missingTags = tags.filter((tag) => !existingTagIds.includes(tag.id));

        // Create new associations for missing tags
        if (missingTags.length > 0) {
            const newAssociations = missingTags.map((tag) => {
                return {recipe_id: latestRecipeId, tag_id: tag.id};
            });

            await db.RecipeTag.bulkCreate(newAssociations);
        }
        return newRecipe;
    }
}

module.exports = createRecipeResolver;