const UserRepository = require("../repositories/user");

const CreateUser = require("./create-user");
const FindUser = require("./find-user");
const CreateTodo = require("./create-todo");
const UpdateTodo = require("./update-todo");
const MarkTodoAsDone = require("./mark-todo-as-done");
const RemoveTodo = require("./remove-todo");

const userRepository = new UserRepository();

class UseCaseFactory {
  static makeCreateUser() {
    return new CreateUser(userRepository);
  }

  static makeFindUser() {
    return new FindUser(userRepository);
  }

  static makeCreateTodo() {
    return new CreateTodo(userRepository);
  }

  static makeUpdateTodo() {
    return new UpdateTodo(userRepository);
  }

  static makeMarkTodoAsDone() {
    return new MarkTodoAsDone(userRepository);
  }

  static makeRemoveTodo() {
    return new RemoveTodo(userRepository);
  }
}

module.exports = UseCaseFactory;
