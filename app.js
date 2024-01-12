const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');

const schema = require('./graphql');

const app = express();
app.use(express.json());

const db = require('./models');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const checkAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    next();
    return;
  }

  // const token = authorization.replace('Bearer ', '');

  // const data = jwt.verify(token, process.env.JWT_SECRET);

  const user = await db.User.findByPk(data.userId);
  
  if(user) {
    req.user = user.dataValues;
  }

  next();
}

app.all('/graphql', checkAuthorization, createHandler({
   schema,
   context: (req) => {
     return req.raw.user;
   },
}))

module.exports = app;
