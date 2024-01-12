const LikeType = require('../../types/like/likeType');
const likePostResolver = require('../../resolvers/like/likePostResolver');
const LikeInputType = require('../../types/like/likeInputType');

const likePost = {
    type: LikeType,
    args: {
      like: {
        type: LikeInputType,
      },
    },
    resolve: likePostResolver,
}

module.exports = likePost;