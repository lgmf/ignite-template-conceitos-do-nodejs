const { UserNotFound } = require("../../domain/error/user");

class FindUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(username) {
    const user = this.userRepository.findByUsername(username);

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}

module.exports = FindUser;
