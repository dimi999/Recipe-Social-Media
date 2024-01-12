const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} = require("graphql");
const {
   GraphQLLocalDateTime,
} = require("graphql-scalars")
const db = require("../../../models");


//this is what the mutation returns
const recipeType = new GraphQLObjectType({
    name: "recipe",
    fields: {
        id: {
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
            type: GraphQLLocalDateTime,
        },
        tags: {
            type: new GraphQLList(GraphQLString),
            async resolve(parent) {
                const recipeTags = await db.RecipeTag.findAll({where: {recipe_id: parent.dataValues.id}});
                const tagIds = recipeTags.map((rt) => rt.tag_id);
                let tags = await db.Tag.findAll({where: {id: tagIds}});
                tags = tags.map(tag => tag.tag_name);
                return tags;
            },
        }
    },
});

module.exports = recipeType;