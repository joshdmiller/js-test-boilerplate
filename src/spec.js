import test from 'tape';
import { double, doubleXTimes, doubleEach, Animal, Reptile, Primate, Human } from './index';

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


test ( 'Animal', function ( test ) {
  const animal = new Animal();

	test.ok( animal instanceof Animal, 'should create an instance of Animal' );

	test.end();
});

test ( 'Animal.speak', function ( test ) {
  const animal = new Animal();

  const actual = animal.speak;
  const expected = 'generic sound';

  test.equal( actual, expected, 'the animal should speak');

  test.end();
});

test ( 'animal inheritance', function ( test ) {

  let actual, expected;

  const reptile = new Reptile();

  test.ok( reptile instanceof Reptile, 'should be an instance of Reptile' );
  test.ok( reptile instanceof Animal, 'should be an instance of Animal' );

  expected = Reptile.SOUND; //not sure what Reptile.SOUND is
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

test ( 'reptile prototypes', function ( test ) {

  const reptile1 = new Reptile();
  const reptile2 = new Reptile();

  test.equal( reptile1.speak, reptile2.speak, 'all Reptiles should use the same prototype function' );

  test.end();

});




test ( 'human inheritance', function ( test ) {

  let actual, expected;

  const human = new Human();

  test.ok( human instanceof Human, 'should be an instance of Human' );
  test.ok( human instanceof Primate, 'should be an instance of Primate' );
  test.ok( human instanceof Animal, 'should be an instance of Animal' );

  const message = 'hello';

  expected = message;
  actual = human.speak( message );

  test.equal( actual, expected, 'should speak what it is asked to speak' );

  test.end();

});
