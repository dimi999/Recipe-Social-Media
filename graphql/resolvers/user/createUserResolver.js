const db = require('../../../models');

const createUserResolver = async (_, { user }) => {
    const { userName, email } = user;
    const newUser = await db.User.create({
        userName,
        email
    });

    console.log('user aici');

    return newUser;
}

module.exports = createUserResolver;