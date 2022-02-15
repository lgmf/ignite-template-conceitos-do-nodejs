const User = require("../../domain/models/user");
const Todo = require("../../domain/models/todo");

const users = new Map();

function createTodo(title, deadline) {
  const todo = new Todo({ title, deadline });
  return todo;
}

class UserRepository {
  create(name, username) {
    const user = new User({ name, username });
    users.set(username, user);
    return user;
  }

  findByUsername(username) {
    return users.get(username);
  }

  addTodo(username, title, deadline) {
    const user = this.findByUsername(username);
    const todo = createTodo(title, deadline);

    user.todos.push(todo);
    users.set(username, user);

    return todo;
  }

  findTodoById(username, todoId) {
    const user = this.findByUsername(username);
    return user.todos.find((todo) => todo.id === todoId);
  }

  updateTodo(username, todoId, payload) {
    const user = this.findByUsername(username);
    const todoIndex = user.todos.findIndex((todo) => todo.id === todoId);
    const todo = user.todos[todoIndex];

    todo.title = payload.title;
    todo.deadline = new Date(payload.deadline);
    users.set(username, user);

    return todo;
  }

  markAsDone(username, todoId) {
    const user = this.findByUsername(username);
    const todoIndex = user.todos.findIndex((todo) => todo.id === todoId);
    const todo = user.todos[todoIndex];

    todo.done = true;
    users.set(username, user);

    return todo;
  }

  removeTodo(username, todoId) {
    const user = this.findByUsername(username);

    user.todos = user.todos.filter((todo) => todo.id !== todoId);
    users.set(username, user);
  }
}

module.exports = UserRepository;
