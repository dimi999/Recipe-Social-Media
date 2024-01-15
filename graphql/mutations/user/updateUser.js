const UserType = require('../../types/user/userType');
const updateUserResolver = require('../../resolvers/user/updateUserResolver');
const updateUserInputType = require('../../types/user/updateUserInputType');

const updateUser = {
    type: UserType,
    args: {
        user: {
            type: updateUserInputType,
        },
    },
    resolve: updateUserResolver,
}

module.exports = updateUser;