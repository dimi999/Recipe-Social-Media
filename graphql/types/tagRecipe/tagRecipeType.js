const {
    GraphQLObjectType,
    GraphQLID,
} = require("graphql");

//this is what the mutation returns
const TagRecipeType = new GraphQLObjectType({
    name: "TagRecipe",
    fields: {
        recipe_id: {
            type: GraphQLID,
        },
        tag_id: {
            type: GraphQLID,
        }
    },
});

module.exports = TagRecipeType;