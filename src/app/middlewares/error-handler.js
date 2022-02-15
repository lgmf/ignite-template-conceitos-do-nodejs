function errorHandler(err, req, response, next) {
  const status = err.statusCode || 500;
  const body = {
    error: err.message,
  };

  response.status(status).send(body);
}

module.exports = errorHandler;
