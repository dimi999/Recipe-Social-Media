const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        user_id: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        username: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString,
        },
        profilePicture: {
            type: GraphQLString,
        },
        bio: {
            type: GraphQLString,
        },
        dateJoined: {
            type: GraphQLString,
        }
    })
});

module.exports = UserType;
