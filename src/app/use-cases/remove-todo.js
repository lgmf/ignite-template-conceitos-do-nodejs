const { TodoNotFound } = require("../../domain/error/todo");

class RemoveTodo {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(username, todoId) {
    const todo = this.userRepository.findTodoById(username, todoId);

    if (!todo) {
      throw new TodoNotFound();
    }

    this.userRepository.removeTodo(username, todoId);
  }
}

module.exports = RemoveTodo;
