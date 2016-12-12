import test from 'tape';
import { Animal, SelfAwareAnimal } from './index';
import stampit from 'stampit';
// import isStamp from 'stampit/isStamp';

test('Can create stamps from SelfAwareAnimal', function(test) {
  const animal = SelfAwareAnimal();

  test.deepEqual( animal.getStamp(), SelfAwareAnimal, 'should create an "instance"/stamp from SelfAwareAnimal' );

  test.end();
});

test('More "inheritance" stamp tests', function(test) {
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