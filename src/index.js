// export function Animal() {}

// Animal.prototype.speak = function() {
//   return('generic sound');
// };

// export function Reptile() {}
// Reptile.prototype = Object.create(Animal.prototype);

// Reptile.prototype.speak = function() {
//   return('rawr');
// }

// export function Primate() {}
// Primate.prototype = Object.create(Animal.prototype);

// Primate.prototype.speak = function() {
//   return ('primate noise')
// }

// export function Human() {}
// Human.prototype = Object.create(Primate.prototype);

// Human.prototype.speak = function(words) {
//   return (words);
// }

// --------------------------------------------------------------------------
// USING ES6 CLASSES

export class Animal {
  constructor() {}

  speak() {
    return("generic sound");
  }
}

export class Reptile extends Animal {
  speak() {
    return("rawr");
  }
}

export class Primate extends Animal {
  speak() {
    return("primate noise");
  }
}

export class Human extends Primate {
  speak(words) {
    return(words);
  }
}


