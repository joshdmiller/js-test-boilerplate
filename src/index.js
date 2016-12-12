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
    this.SOUND = 'generic sound';
}
Animal.prototype.speak = function () {return this.SOUND};

export function Reptile() {
    this.SOUND = 'Roar';
}

Reptile.prototype = new Animal();
Reptile.prototype.constructor = Reptile;

export function Primate() {
    this.SOUND = 'Ooh Ooh Eee!';
}
Primate.prototype = new Animal();
Primate.prototype.constructor = Primate;

export function Human() {
    this.SOUND = 'hello';
}
Human.prototype = new Primate();
Human.prototype.constructor = Human;



