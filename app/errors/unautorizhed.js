const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require ('./custom-api-error');

class Unautorizhed extends CustomAPIError {
    constructor(message) {
        super (message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}

module.exports = Unautorizhed;