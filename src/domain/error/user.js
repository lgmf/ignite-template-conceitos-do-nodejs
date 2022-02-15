const HttpError = require("../error/http-error");

class UsernameAlreadyExists extends HttpError {
  constructor() {
    super("username already exists", 400);
  }
}

class UserNotFound extends HttpError {
  constructor() {
    super("user not found", 404);
  }
}

const errors = {
  UsernameAlreadyExists,
  UserNotFound,
};

module.exports = errors;
