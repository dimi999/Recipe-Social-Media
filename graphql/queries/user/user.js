const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');


const UserType = require('../../types/user/userType');
const db = require("../../../models");

const userQuery = {
    type: UserType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: (_, args) => {
        const { id } = args;
        return db.User.findByPk(id);
    }
}

module.exports = userQuery;