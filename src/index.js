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

export function Animal(){}
Animal.SOUND = 'generic sound';
Animal.prototype.speak = function () {return Animal.SOUND};

export function Reptile(){}
Reptile.SOUND = 'Roar';
Reptile.prototype = Object.create(Animal.prototype);
Reptile.prototype.speak = function () {return Reptile.SOUND};

export function Primate(){}
Primate.SOUND = 'Ooh ooh eee!';
Primate.prototype = Object.create(Animal.prototype);
Primate.prototype.speak = function () {return Primate.SOUND};

export function Human(){}
Human.prototype = Object.create(Primate.prototype);
Human.prototype.speak = function (message) {return message};
