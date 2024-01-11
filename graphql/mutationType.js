const {
    GraphQLObjectType,
} = require('graphql');

const createTag = require('./mutations/tag/createTag');
const createUser = require('./mutations/user/createUser');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createTag: createTag,
        createUser:createUser,
    }
})

module.exports = mutationType;