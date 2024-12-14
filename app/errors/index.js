const CustomAPIError = require('./custom-api-error');
const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const UnautorizhedError = require('./unautorizhed');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
  UnautorizhedError,
  UnauthenticatedError
};