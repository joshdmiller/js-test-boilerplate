
const Animal = function() {};
Animal.prototype = function() {};
Animal.prototype.speak = function() {
  return 'generic sound';
}

const Reptile = function() {};
Reptile.prototype = Object.create(Animal.prototype);
Reptile.SOUND = 'Slither slither';
Reptile.prototype.speak = function(sound = Reptile.SOUND) {
  return Reptile.SOUND;
};

const Primate = function() {};
Primate.prototype = Object.create(Animal.prototype);
Primate.SOUND = 'Ug ug';
Primate.prototype.speak = function(sound = Primate.SOUND) {
  return Primate.SOUND;
};

const Human = function() {};
Human.prototype = Object.create(Primate.prototype);
Human.prototype.speak = function(sound) {
  return sound;
};

export { Animal, Reptile, Primate, Human };
