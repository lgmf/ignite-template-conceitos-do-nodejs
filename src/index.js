const express = require("express");
const cors = require("cors");

const UseCaseFactory = require("./app/use-cases/factory");

const createRequestContext = require("./app/middlewares/create-request-context");
const checksExistsUserAccount =
  require("./app/middlewares/checks-exists-user-account")(UseCaseFactory);
const errorHandler = require("./app/middlewares/error-handler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(createRequestContext);

app.post("/users", (request, response) => {
  const { body } = request;

  const createUser = UseCaseFactory.makeCreateUser();
  const user = createUser.execute(body.name, body.username);

  response.status(201).json(user);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const user = request.context.get("user");
  response.status(200).json(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { body, context } = request;
  const user = context.get("user");

  const createTodo = UseCaseFactory.makeCreateTodo();
  const todo = createTodo.execute(user.username, body.title, body.deadline);

  response.status(201).json(todo);
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  const {
    params: { id },
    context,
    body,
  } = request;

  const user = context.get("user");
  const updateTodo = UseCaseFactory.makeUpdateTodo();

  const updated = updateTodo.execute(user.username, id, body);

  response.status(201).json(updated);
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  const {
    params: { id },
    context,
  } = request;

  const user = context.get("user");

  const markTodoAsDone = UseCaseFactory.makeMarkTodoAsDone();
  const updated = markTodoAsDone.execute(user.username, id);

  response.status(201).json(updated);
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  const {
    params: { id },
    context,
  } = request;

  const user = context.get("user");

  const removeTodo = UseCaseFactory.makeRemoveTodo();
  removeTodo.execute(user.username, id);

  response.status(204).send();
});

app.use(errorHandler);

module.exports = app;
