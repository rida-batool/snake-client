const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  //net.createConnection() expects the port argument first, 
  //and the host (i.e. IP address) argument second.
  const conn = net.createConnection(PORT, IP);

  // interpret incoming data as text
  conn.setEncoding("utf8");


  //The .on method lets you specify an event name 
  //and a function that does something when that event happens.
  conn.on("connect", () => {
    console.log(`successfully estabished connection with server`);
  });

  return conn;
};



module.exports = { connect };