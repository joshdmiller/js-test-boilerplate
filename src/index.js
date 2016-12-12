export function double ( x ) {
  return x * 2;
}

export function doubleXTimes ( x, num ) {
  let result = x;

  for ( let i = 1; i <= num; i++ ) {
    // result = result * 2;
    result = double( result );
  }

  return result;
}

export const doubleEach = x => x.map(double);

export function Animal() {
    this.clorophyll = false;
}
Animal.SOUND = 'generic sound';
Animal.prototype.speak = function () {return Animal.SOUND};

export function Reptile() {
    this.scales = true;
}

Reptile.SOUND = 'Roar';
Reptile.prototype = new Animal();
Reptile.prototype.constructor = Reptile;
Reptile.prototype.speak = function () {return Reptile.SOUND};

export function Primate() {
    this.thumbs = true;
}
Primate.SOUND = 'Ooh ooh eee!';
Primate.prototype = new Animal();
Primate.prototype.constructor = Primate;
Primate.prototype.speak = function () {return Primate.SOUND};

export function Human() {
    this.sentience = true;
}
Human.SOUND = 'hello';
Human.prototype = new Primate();
Human.prototype.constructor = Human;
Human.prototype.speak = function () {return Human.SOUND};


