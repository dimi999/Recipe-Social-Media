const db = require('../../../models');

const postLikeStatusResolver = async (_, args) => {
    const { user_id, recipe_id } = args;
    const count1 = await db.Like.count({
        where: {
            recipe_id: recipe_id
        }
    });

    const count2 = await db.Like.count({
        where: {
            recipe_id: recipe_id,
            user_id: user_id,
        }
    });

    return {
        count: count1,
        userLiked: count2 != 0,
    };
}

module.exports = postLikeStatusResolver;