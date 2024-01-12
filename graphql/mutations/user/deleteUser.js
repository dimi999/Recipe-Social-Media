const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');
const UserType = require('../../types/user/userType');
const deleteUserResolver = require('../../resolvers/user/deleteUserResolver');

const deleteUser = {
    type: UserType,
    args: {
        user_id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: deleteUserResolver
}

module.exports = deleteUser;