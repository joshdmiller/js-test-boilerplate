export function double ( x ) {
  return x * 2;
}

export function doubleXTimes ( x, num ) {
  let result = x;

  // i++ === i = i + 1
  // what is the difference between using let and var?
  for ( let i = 0; i < num; i++ ) {
    // result = result * 2;
    result = double( result ); // internal implementation detail
  }

  return result;
}

export const doubleEach = arr => arr.map( x => double( x ) );

// export function doubleEach ( arr ) {
//   // let result = [];

//   return arr.map( x => double( x ) );
//   // return arr.map( function ( x ) {
//   //   return double ( x );
//   // });

//   // arr.forEach( x => result.push( double( x ) ) );
//   // arr.forEach( function ( x, i ) {
//   //   // result.push( double( x ) );
//   //   result.push( double( arr[ i ] ) );
//   // });

//   // for ( let i = 0; i < arr.length; i++ ) {
//   //   // result.push( arr[i] * 2 );
//   //   result.push( double( arr[i] ) );
//   // }

//   // return result;
// }

// start simple

//export function triple (x) {
//    return x * 3;
//}
//
//export function tripleEach (arr) {
//    let result = arr.map (triple);
//    return result;
//}

// lesson 1 - activity make Animal work.  Constructors and Prototypes
// what I did:
//
//export function Animal ( animal,speak ) {
//    this.speak = function(){
//        return "generic sound";
//    }
//    
//}

export function Animal (){
}

Animal.prototype.speak = function(){
    return 'generic sound';
}

// create new constructors with prototypes that inherit from Animal Reptile and Primate.  Overwrite the speak method for each.

export function Reptile(){
//    let SOUND = 'hiss';
}

Reptile.prototype = new Animal(); // inherit Animal properties if you get created
Reptile.prototype.constructor = Reptile; // Make a valid reptile which is a new animal
Reptile.SOUND = 'hissss';
// you can create a function same as parent 

Reptile.prototype.speak = function(){
    return Reptile.SOUND;
}

export function Primate(){
    }

Primate.prototype = new Animal();
Primate.prototype.constructor = Primate;
Primate.SOUND = "bongos";

Primate.prototype.speak = function (){
    return Primate.SOUND;
}


// Create a human

export function Human(){
    
}

Human.prototype = new Primate();
Human.prototype.constructor = Human;
Human.message = 'hello';

Human.prototype.speak = function(){
    return Human.message;
}