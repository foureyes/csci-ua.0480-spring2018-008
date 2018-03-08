/*

2 computers, identified by ip address <-- street address

2 sockets involved (think of those sockets as endpoints) <-- port ...apartment number
  * multiple services to run on thew same machine
 
internet
* global network of networks
* tcp/ip (suite of protocols)

web
* a bunch of documents
* accessible by url
* linked togethewr by hyperlinks
* built on top of the internet
* http

net module allows the creation of tcp servers and clients

a server is essentially a computer that waits for and responds to requests
 */

const net = require('net');
// create a server w net module

// callback passed into create server
// will be called when client connects
const server = net.createServer((sock) => {
  console.log('client connect');
  sock.on('data', (binaryData) => {
    console.log('received', binaryData + '');
    //sock.write('got this from u ' + binaryData);
    sock.send('does this work?');

    sock.end(); 
  });
});

class Response {
   constructor() {
      this.sock = ... 
   }

   send(data) {
    this.sock.write(); 
   }

}

server.listen(3000, '127.0.0.1');
























































