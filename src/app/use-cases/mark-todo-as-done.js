const { TodoNotFound } = require("../../domain/error/todo");

class MarkTodoAsDone {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(username, todoId) {
    const todo = this.userRepository.findTodoById(username, todoId);

    if (!todo) {
      throw new TodoNotFound();
    }

    return this.userRepository.markAsDone(username, todoId);
  }
}

module.exports = MarkTodoAsDone;
