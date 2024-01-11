const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = require("graphql");

//this is what the mutation returns
const recipeType = new GraphQLObjectType({
    name: "recipe",
    fields: {
        id: {
            type: GraphQLID,
        },
        name:{
            type:GraphQLString,
        }

    },
});

module.exports = recipeType;