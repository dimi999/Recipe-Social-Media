const UserType = require('../types/userType');
const createUserResolver = require('../resolvers/createUserResolver');
const userInputType = require('../types/userInputType');

const createUser = {
    type: UserType,
    args: {
      user: {
        type: userInputType,
      },
    },
    resolve: createUserResolver,
}

module.exports = createUser;