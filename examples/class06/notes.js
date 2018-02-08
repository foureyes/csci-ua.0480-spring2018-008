const net = require('net');
const [PORT, HOST] = [8080, '127.0.0.1'];
const fs = require('fs');


class Request {
  // GET /some/path HTTP/1.1
  // Host: foo.bar
  //
  // body goes here
  constructor(s) {
    // split by \r\n\r\n to get body
    // split the top part \r\n to get headers vs request line
    // TODO: bad assumptions here (valid request, we only need path, etc.)
    // name1=value1&name2=value2&....
    const parts = s.split(' ');
    this.body = s.split('\r\n\r\n')[1];
    this.path = parts[1];
    this.method = parts[0];
  }
}

// routing will map paths to specific functions
const routes = {
  '/hello': (sock) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<h1>hello</h1>');
      sock.end();
  },
  '/bye': (sock) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<h3>bye</h3>');
      sock.end();
  },
  '/foo': (sock) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\nbar');
      sock.end();
  },
  '/': (sock) => {
    // __dirname is the directory that we're running in (absolute path to)
    const path = __dirname + '/public/html/index.html';
    console.log('attempting to read', path);
    fs.readFile(path, 'utf8', (err, data) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n' + data);
      sock.end();
    });
    // send the contents of the file public/html/index.html 
  },
  '/img/croissant.jpg': (sock) => {
    // __dirname is the directory that we're running in (absolute path to)
    const path = __dirname + '/public/img/croissant.jpg';
    console.log('attempting to read image', path);
    fs.readFile(path, {}, (err, data) => {
      // IMPORTANT... for an image
      // write the status line first
      // then the headers
      // and then... separately write the raw binary data of the image
      // CALL write twice
      
      // writing status + headers first
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:image/jpeg\r\n\r\n');

      // write image data
      sock.write(data);

      sock.end();
    });
    // send the contents of the file public/html/index.html 
  },

  '/home': (sock) => {
      sock.write('HTTP/1.1 301 OK\r\nLocation:/bye\r\n\r\n ');
      sock.end();
  },
  // HTTP/1.1 301 Moved Permanently
  // Location: /next/path
  '/form': (sock) => {
    // __dirname is the directory that we're running in (absolute path to)
    const path = __dirname + '/public/html/form.html';
    console.log('attempting to read', path);
    fs.readFile(path, 'utf8', (err, data) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n' + data);
      sock.end();
    });
    // send the contents of the file public/html/index.html 
  },
  
};

// create a server
const server = net.createServer((socket) => {
  // this gets called on first connection
  // socket is connection to client
  // on will respond to events from the client
  // getting data 'data'
  // closing connection 'close'
  socket.on('data', (binaryData) => {
    const s = binaryData.toString();
    const req = new Request(s);
    if(req.method === 'POST') {
      if(req.path === '/form') {
        socket.write('HTTP/1.1 200 OK\r\n\r\n' + req.body);
        socket.end();
      }
    } else if (req.method === 'GET') {
      if(routes.hasOwnProperty(req.path)) {
        const requestHandler = routes[req.path];
        requestHandler(socket);
      } else {
        socket.write('HTTP/1.1 404 Not Found\r\nContent-Type:text/plain\r\n\r\nnot found!');
        socket.end();
      }
    } else {
      // TODO: handle unknown method
    }
  });
});


server.listen(PORT, HOST);



