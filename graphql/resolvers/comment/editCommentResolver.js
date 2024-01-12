const db = require('../../../models');

const editCommentResolver = async (_, { comment, id }) => {
    const { user_id, recipe_id, comment_text } = comment;
    const target = await db.Comment.findByPk(id);

    target.comment_text = comment_text;
    target.save();
    
    return target;
}

module.exports = editCommentResolver;