// net module is a node module that allows
// for the creation of tcp/ip clients and servers
const net = require('net');

const PORT = 8080;
const HOST = '127.0.0.1';


class Request {
  constructor(s) {
    const requestParts = s.split(' ');
    this.path = requestParts[1];
  }
}

// a mapping of actual urls
// to a function that can handle the request
// (to be continued)


/*
const routes = {
  '/hello': (req, socket) => {},
  '/bye': (req, socket) => {}

}
*/



const server = net.createServer((socket) => {
  // this callback will be called as soon as a client connects
  
  // socket is an object that represents the current connected client
  // socket will allow us to read and write to the client that's connected
  // remote address, remote port
  console.log('someone connected', socket.remoteAddress, socket.remotePort);

  // server can react to other events from client other than connect
  // however, to react to these, you must call on method on socket object
  // first arg to on is event (as string: 'data', 'close')
  // second arg is callback function
 
  // binaryData is not a string
  // it's a Buffer object... it represents a raw buffer (binary data)
  // you can convert to a string using toString, it'll assume that it's utf8
  socket.on('data', (binaryData) => {
    const s = binaryData.toString();
    const req = new Request(s);
    if(req.path === '/hello') {
      socket.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<h1>hello</h1>');
    } else if(req.path === '/bye'){
      socket.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<h1>c ya later!!!!!</h1>');
    } else {
      socket.write('HTTP/1.1 404 NOT FOUND\r\nContent-Type:text/html\r\n\r\n<h1>page missing!!!!!</h1>');
    
    }
    socket.end();

  });
  socket.on('close', () => {
    console.log('connection closed'); 
  });



});


// server is going to be an application that accepts requests
// and sends back responses
// long lived process
server.listen(PORT, HOST);

console.log('server started, type ctrl + c to stop');







