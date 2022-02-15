function createRequestContext(req, res, next) {
  req.context = new Map();
  next();
}

module.exports = createRequestContext;
