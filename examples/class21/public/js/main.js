function getMessages() {
  const oldContainer = document.querySelector('#messages');

  if(oldContainer) {
    document.body.removeChild(oldContainer); 
  }
  const req = new XMLHttpRequest();
  const container = document.createElement('div');
  container.id = 'messages';
  document.body.appendChild(container);
  req.open('GET', '/api/messages');
  req.addEventListener('load', function() {
    /// check status... then do this...l
    console.log(req.responseText);
    const messages = JSON.parse(req.responseText);
    for(const m of messages) {
      const div = document.createElement('div');
      div.textContent = m.message + ', ' + m.name;
      container.appendChild(div);
    }
    setTimeout(getMessages, 1000);
  });
  req.send();
}

function handleClick(evt) {
  evt.preventDefault();
  const message = document.querySelector("#message").value;
  const name = document.querySelector("#name").value;
  console.log(message, name);
  const req = new XMLHttpRequest();
  // does not SEND!!!
  // this configures ... what kind of request, and where request is going,
  // but doesn't actually fire off request
  req.open('POST', '/api/message');
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  req.addEventListener('load', function() {
    const container = document.querySelector('#messages');
    // do successful stuff here! 
    const div = document.createElement('div');
    div.textContent = message + ', ' + name;
    container.appendChild(div);
  });
   
  // this does!!!
  // this sends request... but also sets the body of the http request
  req.send("name=" + name + '&message=' + message);
}


function main() {
  const btn = document.querySelector('[type="submit"]');
  btn.addEventListener('click', handleClick);
  getMessages();
}

document.addEventListener("DOMContentLoaded", main);
