const unlikePostResolver = require('../../resolvers/like/unlikePostResolver');
const LikeInputType = require('../../types/like/likeInputType');
const { GraphQLBoolean } = require('graphql');

const unlikePost = {
    type: GraphQLBoolean,
    args: {
      like: {
        type: LikeInputType,
      },
    },
    resolve: unlikePostResolver,
}

module.exports = unlikePost;