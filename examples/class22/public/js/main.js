const socket = io();
function main() {
  // connect to socket io server
  // available because we included /socket.io/socket.io.js
}

socket.on('otherMouse', function(data) {
	console.log(data);
	let otherMouse = document.getElementById('mouse' + data.id);
	if (!otherMouse) {
		otherMouse = document.body.appendChild(document.createElement('div'));
		otherMouse.id = 'mouse' + data.id;
		otherMouse.textContent = data.id;
		otherMouse.classList.add('otherMouse');
	}
	otherMouse.style.top = data.y + "px";
	otherMouse.style.left = data.x + "px";
});

function handleMouse(evt) {
  // console.log(evt.x, evt.y);
  socket.emit('mouseMoved', {x: evt.x, y: evt.y});
}
document.addEventListener('mousemove', handleMouse);



document.addEventListener("DOMContentLoaded", main);
