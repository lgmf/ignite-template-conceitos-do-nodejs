const { UsernameAlreadyExists } = require("../../domain/error/user");

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(name, username) {
    const usernameAlreadyExists = this.userRepository.findByUsername(username);

    if (usernameAlreadyExists) {
      throw new UsernameAlreadyExists();
    }

    return this.userRepository.create(name, username);
  }
}

module.exports = CreateUser;
