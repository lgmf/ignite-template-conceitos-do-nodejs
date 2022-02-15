const Base = require("../core/base");

class Todo extends Base {
  constructor(props) {
    super();

    this.title = props.title;
    this.deadline = new Date(props.deadline);
    this.done = false;
    this.created_at = new Date();
  }
}

module.exports = Todo;
