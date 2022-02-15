const { v4: uuidv4 } = require("uuid");

class Base {
  constructor() {
    this.id = uuidv4();
  }
}

module.exports = Base;
