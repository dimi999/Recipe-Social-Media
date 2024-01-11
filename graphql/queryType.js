const {
    GraphQLObjectType,
} = require('graphql');

const userQuery = require('./queries/user/user');
const tagQuery = require('./queries/tag/tag');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        tag: tagQuery,
        user: userQuery,
    }
})

module.exports = queryType;