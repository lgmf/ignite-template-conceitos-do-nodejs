function makeMiddleware(UseCaseFactory) {
  return (req, res, next) => {
    const {
      headers: { username },
    } = req;

    const findUser = UseCaseFactory.makeFindUser();
    const user = findUser.execute(username);

    req.context.set("user", user);

    next();
  };
}

module.exports = makeMiddleware;
