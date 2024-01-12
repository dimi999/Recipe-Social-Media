const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const userInputType = new GraphQLInputObjectType({
    name: "UserInputType",
    fields: {
        userName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        }
    }
});

module.exports = userInputType;