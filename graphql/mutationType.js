const {
    GraphQLObjectType,
} = require('graphql');

const createTag = require('./mutations/tag/createTag');
const createUser = require('./mutations/user/createUser');
const updateUser = require("./mutations/user/updateUser")
const deleteUser = require("./mutations/user/deleteUser")
const createRecipe = require('./mutations/recipe/createRecipe');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createTag:createTag,
        createUser:createUser,
        updateUser:updateUser,
        deleteUser:deleteUser,
        createRecipe:createRecipe,
    }
})

module.exports = mutationType;