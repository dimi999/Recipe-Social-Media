const {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} = require("graphql");

const updateRecipeInputType = new GraphQLInputObjectType({
    name: "UpdateRecipeInputType",
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
          },
        user_id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        ingredients: {
            type: GraphQLString,
        },
        instructions: {
            type: GraphQLString,
        },
        imageUrl: {
            type: GraphQLString,
        },
        dateCreated: {
            type: GraphQLString,
        },
    },
});

module.exports = updateRecipeInputType;
