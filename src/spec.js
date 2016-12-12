import test from 'tape';
import { double, doubleXTimes, doubleEach, tripleEach, Animal, Reptile, Primate, Human } from './index';

test( 'double fn', function ( test ) {
  const actual = double( 5 );
  const expected = 10;

  test.equal( actual, expected, 'should double the value' );

  test.end();
});

test( 'doubleXTimes', function ( test ) {
  const actual = doubleXTimes( 5, 3 );
  const expected = 40;

  test.equal( actual, expected, 'should double 5 three times' );

  test.end();
});

test( 'doubleEach', function ( test ) {
  const actual = doubleEach([ 0, 1, 2 ]);
  const expected = [ 0, 2, 4 ];

  test.deepEqual( actual, expected, 'should double each in the array' );

  test.end();
});

// just checking if I can 'copy paste'!
//
//test ( 'tripleEach', function ( test ) {
//    const actual = tripleEach([1, 3 ,6]);
//    const expected = [3, 9, 18];
//    
//    test.deepEqual( actual, expected, 'should triple each in the array');
//    
//    test.end();
//});

// lesson 1 activity - try and make test pass.

test ( 'Animal', function ( test ) {
    const animal = new Animal (); // constructor
    
    test.ok( animal instanceof Animal, 'should create an instance of Animal');
    
//    console.log(animal);
    
    test.end();
});

test ('Animal', function (test) {
    const animal = new Animal ();
    const expected = 'generic sound';
    const actual = animal.speak();
    
    test.equal( actual, expected, 'should make a generic sound when it speaks');
    
    test.end();
});



// inheritance
//
//

test ('Inheritance', function (test) {
    let actual, expected;


    const reptile = new Reptile();

    test.ok( reptile instanceof Reptile, 'should be an instance of Reptile' );
    test.ok( reptile instanceof Animal, 'should be an instance of Animal' );

    expected = Reptile.SOUND;
    actual = reptile.speak();
    test.equal( actual, expected, 'should make a reptile sound when it speaks' );

    const primate = new Primate();

    test.ok( primate instanceof Primate, 'should be an instance of Primate' );
    test.ok( primate instanceof Animal, 'should be an instance of Animal' );

    expected = Primate.SOUND;
    actual = primate.speak();
    test.equal( actual, expected, 'should make a primate sound when it speaks' );
    test.end();
});

test ('Inheritance Human', function (test){
    
    let actual, expected;

    const human = new Human();

    test.ok( human instanceof Human, 'should be an instance of Human' );
    test.ok( human instanceof Primate, 'should be an instance of Primate' );
    test.ok( human instanceof Animal, 'should be an instance of Animal' );

    const message = 'hello';
    expected = message;
    actual = human.speak( message );
    test.equal( actual, expected, 'should speak what it is asked to speak' );
    
    test.end()
});