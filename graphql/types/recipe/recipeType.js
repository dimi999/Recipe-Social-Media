const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = require("graphql");
const {
   GraphQLLocalDateTime,
} = require("graphql-scalars")

//this is what the mutation returns
const recipeType = new GraphQLObjectType({
    name: "recipe",
    fields: {
        id: {
            type: GraphQLID,
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

module.exports = recipeType;