const {
    GraphQLObjectType,
} = require('graphql');

const userQuery = require('./queries/user/user');
const tagQuery = require('./queries/tag/tag');
const recipeQuery = require('./queries/recipe/recipe');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        tag: tagQuery,
        user: userQuery,
        recipe:recipeQuery,
    }
})

module.exports = queryType;
