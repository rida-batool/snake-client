// const { connect } = require('./client');

// let conn = connect();

const handleUserInput = function(key) {
  console.log('taking input');
  console.log(`${key}`);
  if (key === '\u0003') {
    console.log("exiting"); //registered event listener which is stdin (stdin is a listener)
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
