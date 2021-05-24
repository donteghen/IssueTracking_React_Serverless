
const express = require('express');
const fs = require('fs');
const {ApolloServer }= require('apollo-server-express')
const resolvers = require('./Resolvers')
const app = express();

console.log('hhh')

const server = new ApolloServer({
    typeDefs : fs.readFileSync('./schema.graphql', 'utf8'),
    resolvers,
    //context: ({req}) => console.log(req.body)
})

server.applyMiddleware({app, path:'/graphql', cors:false})

app.listen(4000, function () { console.log('App started on port 4000');
});

