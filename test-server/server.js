/* Use for debug, test the connection from client side */
var net = require('net');
var server = net.createServer(function(connection) {
   console.log('client connected: [%s : %d]',connection.localAddress, connection.localPort);

   connection.on('end', function() {
      console.log('client disconnected');
   });

   connection.on('data',(data) => {
      console.log("Receive: %s",data.toString());
   });

   connection.pipe(connection);
});

server.listen(8000,() => {
   console.log('server is listening');
});
