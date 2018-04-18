// server

// io object (which represents the web socket server)
// socket (connection to a client)

// client

// io object (which connects to server and gives back socket)
// socket (connection to the server)

/*
these objects
1. they allow for the sending of data (usually through a method called
  emit, and permutations of)
  `socket.emit('someCustomName', data)`
  `event name is first arg, payload / data is second arg`
2. listening for data using a method called on
  `socket.on('someCustomName', cb)`
*/

const express = require('express');
const app = express();
const server = require('http').Server(app);
// this is creating the socket io server
// this piggybacks our socket io server on top of http server
const io = require('socket.io')(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  // inside this use socket object to listen for custom
  // events
  console.log(socket.id, 'has connected');
  socket.on('mouseMoved', (data) => {
    console.log(data.x, data.y); 
    data.id = 'mouse' + socket.id;
    socket.broadcast.emit('otherMouse', data);
  });
});


server.listen(3000);














