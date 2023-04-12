const net = require("net");
const { connect } = require('./client');
const { setupInput } = require("./input");

console.log("Connecting ...");
let conn = connect();

setupInput(conn);


//"data", "connect" are fixed event listeners. you can't change it
conn.on("data", (data) => {
  console.log("Server says: ", data);
});

//giving a name to snake
// const name = 'RB';
// conn.write(`Name: ${name}`);



//Examples of testing snake movement after delays
 //moves the snake up, down left right
// setInterval(() => {
//   conn.write("Move: up");
// }, 1000)

  // setTimeout(() => {
  //   conn.write('Move: up');
  // }, 2000)
