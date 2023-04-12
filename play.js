const net = require("net");
const connect = require('./client');
const stdin = process.stdin;

console.log("Connecting ...");
let conn = connect();


//"data", "connect" are fixed event listeners. you can't change it
conn.on("data", (data) => {
  console.log("Server says: ", data);
});

const name = 'RB';
conn.write(`Name: ${name}`);

const handleUserInput = function(key) {
  console.log('taking input');
  conn.write(`${key}`);
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

setupInput();


 //moves the snake up, down left right
// setInterval(() => {
//   conn.write("Move: up");
// }, 1000)

  // setTimeout(() => {
  //   conn.write('Move: up');
  // }, 2000)







//The .on method lets you specify an event name 
//and a function that does something when that event happens.
// conn.on("connect", () => {
//   console.log(`I have estabished connection with server`);
// });