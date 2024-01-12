const { 
    GraphQLObjectType, 
} = require('graphql');

const createUser = require('./mutations/createUser');
const addComment = require('./mutations/comment/addComment');
const deleteComment = require('./mutations/comment/deleteComment');
const editComment = require('./mutations/comment/editComment');
const likePost = require('./mutations/like/likePost');
const unlikePost = require('./mutations/like/unlikePost');


const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: createUser,
      addComment: addComment,
      deleteComment: deleteComment,
      editComment: editComment,
      likePost: likePost,
      unlikePost: unlikePost
    }
  })

module.exports = mutationType;
