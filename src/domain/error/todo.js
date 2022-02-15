const HttpError = require("../error/http-error");

class TodoNotFound extends HttpError {
  constructor() {
    super("todo not found", 404);
  }
}

const errors = {
  TodoNotFound,
};

module.exports = errors;
