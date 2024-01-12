const db = require('../../../models');

const likePostResolver = async (_, { like }) => {
    const { user_id, recipe_id } = like;
    date_liked = new Date();
    const newLike = await db.Like.create({
        user_id,
        recipe_id,
        date_liked,
    });
  
    return newLike;
}

module.exports = likePostResolver;