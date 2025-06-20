const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
 
function  pingProblemController(req,res) {
    return res.json({message : 'problem controller is up'});
}


function addProblem(req,res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function getProblem(req,res, next) {
    // instead of returning manually things like this lets do next thing
    //   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    //     message: 'Not implemented'
    // })

    try {
        throw new NotImplemented('getProblem')
    } catch(error) {
        next(error);
    }

}

function getProblems(req,res) {
      return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function deleteProblem(req,res) {
   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function updateProblem(req,res) {
       return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}


module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}