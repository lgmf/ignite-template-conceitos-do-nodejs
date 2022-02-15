const Base = require("../core/base");

class User extends Base {
  constructor(props) {
    super();

    this.name = props.name;
    this.username = props.username;
    this.todos = [];
  }
}

module.exports = User;
