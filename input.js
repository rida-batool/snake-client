
let connection;

const handleUserInput = function(key) {
  //console.log('taking input');
  connection.write("Say: Incoming!"); //displays a message with your snake
  if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === '\u0003') {
    console.log("exiting"); //registered event listener which is stdin (stdin is a listener)
    process.exit();
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
