import test from 'tape';
import { double, doubleXTimes, doubleEach, Animal, Reptile, Primate, Human} from './index';
import stampit from 'stampit';
import isStamp from 'stampit/isStamp';

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
  const animal = stampit().compose(Animal);
  console.log( animal().speak('bark bark bark') );
  // console.log('4. Animalxxxx', Animal.hasCreated(animal));
  console.log('1. animal', animal);
  // console.log('2. isStamp(Animal)', isStamp(Animal) );
  // console.log('3. isstamp(animal)', isStamp(animal) );
  test.ok( isStamp(Animal), 'Animal is a stamp' );
  test.ok( '?', 'animal is an instance of Animal' );
  test.end();
});
