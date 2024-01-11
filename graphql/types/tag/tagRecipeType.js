const {
    GraphQLObjectType,
    GraphQLID,
} = require("graphql");

//this is what the mutation returns
const TagrecipeType = new GraphQLObjectType({
    name: "Tagrecipe",
    fields: {
        recipeId: {
            type: GraphQLID,
        },
        tagId: {
            type: GraphQLID,
        }
    },
});

module.exports = TagrecipeType;