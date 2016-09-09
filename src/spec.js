import test from 'tape';
import { Animal, Primate } from './index';

test( 'Animal', function ( test ) {
  let animal, actual, expected;

  animal = new Animal();
  test.ok( animal instanceof Animal, 'should create an instance of Animal' );

  animal = new Animal( 'new sound' );
  expected = 'new sound';
  actual = animal.sound;
  test.equal( actual, expected, 'should overwrite the sound' );

  test.end();
});

test( 'Animal.speak()', function ( test ) {
  let expected, actual;

  const animal = new Animal();
  expected = 'generic sound';

  const animal2 = new Animal();
  animal2.sound = 'another sound';
  expected = 'another sound';

  actual = animal.speak();
  actual = animal2.speak();

  test.equal( animal.speak, animal2.speak );

  test.equal( actual, expected, 'should make a generic sound when it speaks' );
  test.equal( actual, expected, 'should make a generic sound when it speaks' );

  test.end();
});

test( 'Primate', function ( test ) {
  let expected, actual;

  const primate = new Primate();

  test.ok( primate instanceof Primate, 'should be an instance of Primate' );
  test.ok( primate instanceof Animal, 'should be an instance of Animal' );

  // expected = Primate.SOUND;
  actual = primate.speak();
  expected = 'ooh ahah!';
  test.equal( actual, expected, 'should make a primate sound when it speaks' );

  test.end();
});

