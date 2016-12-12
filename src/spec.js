import test from 'tape';
import { Animal, Reptile } from './index';
import stampit from 'stampit';
// import isStamp from 'stampit/isStamp';

test('Can create instances from Animal stamp', function(test) {
  const animal = Animal();
  test.ok( typeof animal.speak == 'function', 'animal sounds like an Animal' );
  test.end();
});

test('More "inheritance" stamp tests', function(test) {
  let actual, expected;

  const reptile = Reptile();

  test.ok( typeof reptile.speak("I'm a reptile") == "I'm a reptile", 'should be an instance of Reptile' );
  test.ok( typeof reptile.speak == 'function', 'should be an instance of Animal' );

  expected = Reptile.SOUND;
  actual = reptile.speak(expected);
  test.equal( actual, expected, 'should make a reptile sound when it speaks' );

  const primate = Primate();

  test.ok( primate instanceof Primate, 'should be an instance of Primate' );
  test.ok( primate instanceof Animal, 'should be an instance of Animal' );

  expected = Primate.SOUND;
  actual = primate.speak();
  test.equal( actual, expected, 'should make a primate sound when it speaks' );

  test.end();
});
