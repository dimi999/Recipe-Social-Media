const db = require('../../../models');

const deleteUserResolver = async (_,args) => {
    console.log(args)
    const { user_id } = args;
    const targetUser = await db.User.findByPk(user_id);

    if (!targetUser) {
        throw new Error('User not found');
    }

    try {
        await targetUser.destroy();

        return true;
    } catch (error) {
        new Error(`Error deleting user: ${error.message}`);
    }

}

module.exports = deleteUserResolver;
