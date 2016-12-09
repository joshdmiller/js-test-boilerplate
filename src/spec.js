import test from 'tape';
import { Animal, Reptile, Primate, Human } from './index';

test('animal', function(test) {
  const animal = new Animal();
  test.ok(animal instanceof Animal, 'should create an instance of Animal');
  test.end();
});

test('speak', function(test) {
  const animal = new Animal();
  const expected = 'generic sound';
  const actual = animal.speak();

  test.equal(actual, expected, 'should make a generic sound when it speaks');
  test.end();
});

test('inheritance', function(test) {
  let actual, expected;
  const reptile = new Reptile();
  test.ok(reptile instanceof Reptile, 'should be an instance of Reptile');
  test.ok(reptile instanceof Animal, 'should be an instance of Animal');

  expected = 'rawr';
  actual = reptile.speak();

  test.equal(actual, expected, 'should make a reptile sound when it speaks');

  const primate = new Primate();

  test.ok(primate instanceof Primate, 'should be an instance of primate');
  test.ok(primate instanceof Animal, 'should be an instance of animal');

  expected = "primate noise";
  actual = primate.speak();
  test.end();
});

test('double inheritance', function(test) {
  let actual, expected;

  const human = new Human();

  test.ok(human instanceof Human, 'should be an instance of human');
  test.ok(human instanceof Primate, 'should be an instance of Primate');
  test.ok(human instanceof Animal, 'should be an instance of animal');

  const message = 'hello';
  expected = message;
  actual = human.speak(message);
  test.equal(actual, expected, 'should speak what it is asked to speak');
  test.end();
})


