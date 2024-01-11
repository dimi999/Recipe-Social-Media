const { GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const tagInputType = new GraphQLInputObjectType({
    name: "TagInputType",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }
});

module.exports = tagInputType;