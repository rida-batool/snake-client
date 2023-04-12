const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //The .on method lets you specify an event name 
  //and a function that does something when that event happens.
  conn.on("connect", () => {
    console.log(`successfully estabished connection with server`);
  });

  return conn;
};



module.exports = connect;