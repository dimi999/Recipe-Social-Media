const { GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');
const {GraphQLLocalDateTime} = require("graphql-scalars");

const recipeInputType = new GraphQLInputObjectType({
    name: "RecipeInputType",
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        ingredients: {
            type: new GraphQLNonNull(GraphQLString),
        },
        instructions: {
            type: new GraphQLNonNull(GraphQLString),
        },
        imageUrl: {
            type: new GraphQLNonNull(GraphQLString),
        },
        dateCreated: {
            type: new GraphQLNonNull(GraphQLLocalDateTime),
        },
    }
});

module.exports = recipeInputType;