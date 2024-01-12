const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
} = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: {
        type: GraphQLID,
      },
      firstName: {
        type: GraphQLString,
      },
      lastName: {
        type: GraphQLString,
      },
      userName: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
    })
});

module.exports = UserType;
