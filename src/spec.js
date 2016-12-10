import test from 'tape';
import { double, doubleXTimes, doubleEach, Animal, Reptile } from './index';

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

test('Animal exists', function(test) {
  const animal = new Animal();

  test.ok( animal instanceof Animal, 'should create an instance of Animal' );
  test.end();
});

test('Animal has speak method', function(test) {
  const animal = new Animal();
  const expected = 'generic sound';
  const actual = animal.speak(expected);

  test.equal( actual, expected, 'should make a generic sound when it speaks' );
  test.end();
});
