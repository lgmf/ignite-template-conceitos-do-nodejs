class CreateTodo {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(username, title, deadline) {
    const todo = this.userRepository.addTodo(username, title, deadline);
    return todo;
  }
}

module.exports = CreateTodo;
