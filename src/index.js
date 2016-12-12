
export function Animal() {};

Animal.SOUND = "generic sound";

Animal.prototype.speak = function() {
  return Animal.SOUND;
  // It seems like this should be relative
  // so I don't have to repeat
}



export function Reptile() {};

Reptile.prototype = Object.create(Animal.prototype);

Reptile.SOUND = 'rrreptile sound';

Reptile.prototype.speak = function() {
  return Reptile.SOUND;
  // seems like I should be able to override this
  // in a better style
}



export function Primate() {};

Primate.prototype = Object.create(Animal.prototype);

Primate.SOUND = 'ooh ooh ah ah';

Primate.prototype.speak = function() {
  return Primate.SOUND;
}



export function Human() {};

Human.prototype = Object.create(Primate.prototype);

Human.SOUND = 'Well, hello sir.';

Human.prototype.speak = function(sound = Human.SOUND) {
  return sound;
}
