import test from 'tape';
import { Animal, Reptile, Primate, Human } from './index';



test('Create a constructor function and a prototype for an Animal', function(test) {

  const animal = new Animal();

  test.ok( animal instanceof Animal, 'should create an instance of Animal' );

  test.end();
});



test('Create a function on Animal ‘s prototype called speak  that returns the animal’s sound.', function(test) {

  const animal = new Animal();
  const expected = 'generic sound';
  const actual = animal.speak();

  test.equal( actual, expected, 'should make a generic sound when it speaks' );

  test.end();
});



test('Create two new constructors with prototypes that inherit from Animal: Reptile and Primate.  Overwrite the speak  method for each.', function(test) {

  let actual, expected;

  const reptile = new Reptile();

  test.ok( reptile instanceof Reptile, 'should be an instance of Reptile' );
  test.ok( reptile instanceof Animal, 'should be an instance of Animal' );

  expected = Reptile.SOUND;
  // "It is in uppercase because that's a common convention
  // for constants defined on the constructor rather than on the prototype."
  actual = reptile.speak();
  console.log(`* Reptile says, "${actual}"`);
  test.equal( actual, expected, 'should make a reptile sound when it speaks' );

  const primate = new Primate();

  test.ok( primate instanceof Primate, 'should be an instance of Primate' );
  test.ok( primate instanceof Animal, 'should be an instance of Animal' );

  expected = Primate.SOUND;
  actual = primate.speak();
  console.log(`* Primate, says, "${actual}"`);
  test.equal( actual, expected, 'should make a primate sound when it speaks' );
  test.end();
});



test('Create one more that inherits from Primate called Human.', function(test) {

  let actual, expected;

  const human = new Human();

  test.ok( human instanceof Human, 'should be an instance of Human' );
  test.ok( human instanceof Primate, 'should be an instance of Primate' );
  test.ok( human instanceof Animal, 'should be an instance of Animal' );

  const message = 'Hello';
  expected = message;
  actual = human.speak( message );
  console.log(`* Human says, "${actual}"`);
  test.equal( actual, expected, 'should speak what it is asked to speak' );

  test.end();
});
