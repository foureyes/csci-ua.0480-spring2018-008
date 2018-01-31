function Werewolf(mood) {
  this.mood = mood;
}

Werewolf.prototype.howl = function(thing) {
  console.log(this.mood, 'werewolf howls at the', thing);
}

const w1 = new Werewolf('happy');
const w2 = new Werewolf('sad');

w1.howl('sun');
w2.howl('moon');

function SpaceWerewolf() {
  this.floating = true;
  Werewolf.call(this, 'really happy');
}

SpaceWerewolf.prototype = Object.create(Werewolf.prototype);
SpaceWerewolf.prototype.spaceWalk = function() {
  console.log('walking in space!');
}
SpaceWerewolf.prototype.constructor = SpaceWerewolf;

s = new SpaceWerewolf();
s.howl('stars');
console.log(s.constructor);
console.log(w1.constructor);

