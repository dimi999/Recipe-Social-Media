const {
    GraphQLObjectType,
} = require('graphql');

const userQuery = require('./queries/user/user');
const tagQuery = require('./queries/tag/tag');
const recipeQuery = require('./queries/recipe/recipe');
const postLikeStatus = require('./queries/like/postLikeStatus');
const getPostComments = require('./queries/comment/getPostComments');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        tag: tagQuery,
        user: userQuery,
        recipe:recipeQuery,
        postLikeStatus: postLikeStatus,
        getPostComments: getPostComments,
    }
})

module.exports = queryType;
