const { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } = require('graphql');

const likeInputType = new GraphQLInputObjectType({
    name: "LikeInputType",
    fields: {
        user_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        recipe_id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    }
});

module.exports = likeInputType;