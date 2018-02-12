homework 3
====
making your own framework (a terrible one, but really good at explaining http)

sendTextFile
sendImage



Request
* .body
* .path
* .method
* .headers
* .toString()

Response
abstract away having to use the net module and a bare socket
(no more explicit calls to sock.write or sock.end... all will be implicit
within Response object)

* .headers
* .status
* .toString()
* .send('hello') // automatically gen an http response w status code, content type plain text and body of hello
* .sendFile('filename.ext') // merging two functions from part 1
* .write (pass through exactly to sock.write)
* .writeHeader (write everything but the body) ...will be handy for sendFile with an image

App
this will encapsulate the routes and the functions that are added to the routes
routes[path] = fn


routes[/] = fn
routes[GET /] = fn
routes[POST /] = fn
routes[GET][/]
routes[POST][/]


const app = new App();

app.get('/', function(req, res) {}); // adds a route for GET ... with path /
app.post('/', function(req, res) {}); // adds a route for POST ... with path /

















