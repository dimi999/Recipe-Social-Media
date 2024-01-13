const {
    GraphQLObjectType,
} = require('graphql');

const addComment = require('./mutations/comment/addComment');
const deleteComment = require('./mutations/comment/deleteComment');
const editComment = require('./mutations/comment/editComment');
const likePost = require('./mutations/like/likePost');
const unlikePost = require('./mutations/like/unlikePost');

const createTag = require('./mutations/tag/createTag');
const createUser = require('./mutations/user/createUser');
const updateUser = require("./mutations/user/updateUser")
const deleteUser = require("./mutations/user/deleteUser")
const createRecipe = require('./mutations/recipe/createRecipe');
const updateRecipe = require('./mutations/recipe/updateRecipe');
const deleteRecipe = require ('./mutations/recipe/deleteRecipe');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: createUser,
      addComment: addComment,
      deleteComment: deleteComment,
      editComment: editComment,
      likePost: likePost,
      unlikePost: unlikePost,
      createTag:createTag,
      createUser:createUser,
      updateUser:updateUser,
      deleteUser:deleteUser,
      createRecipe:createRecipe,
      updateRecipe:updateRecipe,
      deleteRecipe:deleteRecipe
    }
})

module.exports = mutationType;
