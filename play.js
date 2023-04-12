const net = require("net");
const { connect } = require('./client');
const { setupInput } = require("./input");

console.log("Connecting ...");
//let conn = connect();
connect();
setupInput();

//"data", "connect" are fixed event listeners. you can't change it
// conn.on("data", (data) => {
//   console.log("Server says: ", data);
// });

// const name = 'RB';
// conn.write(`Name: ${name}`);

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