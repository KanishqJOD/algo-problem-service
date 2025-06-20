// Error objects are thrown when runtime errors occur
// The Error object can also be used as base object for user-defined


class BaseError extends Error{
    constructor(name,statusCode,description,details) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
          
    }
 }

 module.exports = BaseError;