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
 //moves the snake up, down left right

// setInterval(() => {
//   conn.write("Move: up");
// }, 1000)


  // setTimeout(() => {
  //   conn.write('Move: up');
  // }, 2000)




// setTimeout(() => {
//   conn.write('Move: up');
//   conn.write('Move: left');
//   conn.write('Move: up');
// }, 50)
// conn.on('data', () => {
//   setTimeout(() => {
    
//   }, 0);
//   setTimeout(() => {
//     conn.write('Move: up');

//   }, 0);


// });

// conn.on('data', () => {
//   conn.write('Move: up');
//   conn.write('Move: left');
// });

//The .on method lets you specify an event name 
//and a function that does something when that event happens.
// conn.on("connect", () => {
//   console.log(`I have estabished connection with server`);
// });