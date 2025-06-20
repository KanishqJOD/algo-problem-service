const BaseError = require('./Base.error');
const { StatusCodes } = require('http-status-codes');

// Bad Request cliend side issue, example some sending empty code or something like that.

class BadRequest extends BaseError{
    constructor(propertyName,details) {
        super("BadRequest", StatusCodes.BadRequest, `Invalid structure for ${propertyName} provided ,${details} `)
    }
}

module.exports = BadRequest;