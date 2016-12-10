export function double ( x ) {
  return x * 2;
}

export function doubleXTimes ( x, num ) {
  let result = x;
  for ( let i = 1; i <= num; i++ ) {
    result = double( result );
  }
  return result;
}

export function doubleEach ( arr ) {
  return arr.map( double );
}

export function Animal() {};

Animal.prototype.speak = function(sound) {
  return sound;
}
