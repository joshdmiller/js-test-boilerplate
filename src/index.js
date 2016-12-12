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

export function doubleEach ( arr ) {
  let result = arr.map( double );

  // const result = arr.map( x => double( x ) );
  // const result = arr.map( function ( x ) {
  //   return double( x );
  // });

  return result;
}

export function Animal() {}
Animal.prototype.speak = 'generic sound';

Reptile.prototype = Object.create(Animal.prototype);
export function Reptile() {}
Reptile.prototype.speak = () => console.log('Hisss!');

Primate.prototype = Object.create(Animal.prototype);
export function Primate() {}
Primate.prototype.speak = () => console.log('Oo Oo Oo!');

Human.prototype = Object.create(Primate.prototype);
export function Human() {}
Human.prototype.speak = ( message ) => message;

