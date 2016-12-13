import test from 'tape';
import { Animal, Reptile, Primate, Human } from './index';
import stampit from 'stampit';
// import isStamp from 'stampit/isStamp';

test('Can create "stamps?" from Animal stamp', function(test) {

  const animal = Animal();

  test.ok( typeof animal.speak == 'function', 'animal has a speak function.. "looks like an Animal"' );

  test.equal( animal.speak(), 'generic sound', 'Sounds like an Animal');

  console.log('* Animal says: ' + animal.speak() );
  // Must be an Animal?

  test.end();
});


test('More "inheritance" stamp tests', function(test) {

  let actual, expected;

  const reptile = Reptile();

  test.ok( typeof reptile.speak == 'function', 'reptile has a speak function.. "looks like an Animal"' );

  expected = reptile.SOUND;
  actual = reptile.speak();
  console.log('* reptile says: ', actual);
  test.equal( actual, expected, 'should make a reptile sound when it speaks.. "Sounds like a Reptile"' );

  const primate = Primate();

  test.ok( typeof primate.speak == 'function', 'primate has a speak function.. "looks like an Animal"' );

  expected = primate.SOUND;
  actual = primate.speak();
  console.log('* primate says: ', actual);
  test.equal( actual, expected, 'should make a primate sound when it speaks.. Sounds like a Primate' );

  test.end();
});


test('Human tests...', function(test) {

  let actual, expected;

  const human = Human();
  //hmmmmm
  test.ok( typeof human.speak == 'function', 'reptile has a speak function.. "looks like an Animal"' );

  const message = 'hello';
  expected = message;
  actual = human.speak( message );
  console.log('* human says: ', actual);
  test.equal( actual, expected, 'should make a primate sound when it speaks.. Sounds like a Primate' );

  test.end();
});
