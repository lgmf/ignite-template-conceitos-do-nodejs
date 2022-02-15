const { TodoNotFound } = require("../../domain/error/todo");

class UpdateTodo {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(username, todoId, payload) {
    const todo = this.userRepository.findTodoById(username, todoId);

    if (!todo) {
      throw new TodoNotFound();
    }

    return this.userRepository.updateTodo(username, todoId, payload);
  }
}

module.exports = UpdateTodo;
