const {
    GraphQLSchema,
} = require('graphql');

const queryType = require('./queryType');
const mutationType = require('./mutationType');

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
})

module.exports = schema;
<<<<<<< HEAD
=======

>>>>>>> ed75888169a9dfff3c37db3c8ee63ab8a2d0c00a
