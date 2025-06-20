const express = require('express');
const ProblemRouter = require('./problems.routes');



const v1Router = express.Router();

// If any request comes and continues  with /problem, we map it to problemRouter 
v1Router.use('/problems', ProblemRouter);

module.exports = v1Router;