const db = require('../../../models');

const addCommentResolver = async (_, { comment }) => {
    console.log('aci');
    const { user_id, recipe_id, comment_text } = comment;
    date_commented = new Date();
    const newComment = await db.Comment.create({
        user_id,
        recipe_id,
        comment_text,
        date_commented,
    });
  
    return newComment;
}

module.exports = addCommentResolver;