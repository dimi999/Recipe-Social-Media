const db = require('../../../models');

const createUserResolver = async (_, { user }) => {
    const { username, email, password, profile_picture, bio, date_joined } = user;
    const newUser = await db.User.create({
        username,
        email,
        password,
        profile_picture,
        bio,
        date_joined
    });

    return newUser;
}

module.exports = createUserResolver;
