const { exec, match, parse } = require('matchit');

class Shipharbor {
  constructor(opts) {
    this.opts = opts || {};
    this.routes = [];
    this.handlers = {};
  }

  add(pattern, handler) {
    this.routes.push(parse(pattern));
    this.handlers[pattern] = handler;
    return this;
  }

  match(url) {
    let arr = match(url, this.routes);
    if (!arr.length) return false;
    return {
      params: exec(url, arr),
      handler: this.handlers[arr[0].old]
    };
  }
}

module.exports = Shipharbor;
