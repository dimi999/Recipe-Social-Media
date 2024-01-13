const {
    GraphQLObjectType,
} = require('graphql');

const createTag = require('./mutations/tag/createTag');
const updateTag = require('./mutations/tag/updateTag');
const deleteTag = require('./mutations/tag/deleteTag');
const createUser = require('./mutations/user/createUser');
const createRecipe = require('./mutations/recipe/createRecipe');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createTag: createTag,
        updateTag: updateTag,
        deleteTag: deleteTag,
        createUser:createUser,
        createRecipe:createRecipe,
    }
})

module.exports = mutationType;