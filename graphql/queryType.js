const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const userQuery = require('./queries/user');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: userQuery,
    }
})

module.exports = queryType;
