import test from 'tape';
import {Animal, Reptile, Primate, Human} from './index';

test('instance', function (test) {
    const animal = new Animal();
    test.ok( animal instanceof Animal, 'should create an instance of Animal' );

    test.end();
});

test('sound', function (test) {

    const animal = new Animal();
    const expected = 'generic sound';
    const actual = animal.speak('generic sound');

    test.equal( actual, expected, 'should make a generic sound when it speaks' );
    test.end();
});

test('reptile', function (test) {

    let actual, expected;

    const reptile = new Reptile();

    test.ok( reptile instanceof Reptile, 'should be an instance of Reptile' );
    test.ok( reptile instanceof Animal, 'should be an instance of Animal' );

    expected = reptile.SOUND;
    actual = reptile.speak();
    test.equal( actual, expected, 'should make a reptile sound when it speaks' );
    test.end();
})

test('primate', function (test) {

    let actual, expected;

    const primate = new Primate();

    test.ok( primate instanceof Primate, 'should be an instance of Primate' );
    test.ok( primate instanceof Animal, 'should be an instance of Animal' );

    expected = primate.SOUND;
    actual = primate.speak();
    test.equal( actual, expected, 'should make a primate sound when it speaks' );

    test.end();
});

test('human', function (test) {

    let actual, expected;

    const human = new Human();

    test.ok( human instanceof Human, 'should be an instance of Human' );
    test.ok( human instanceof Primate, 'should be an instance of Primate' );
    test.ok( human instanceof Animal, 'should be an instance of Animal' );

    const message = 'hello';
    expected = message;
    actual = human.speak(message);
    test.equal( actual, expected, 'should speak what it is asked to speak' );

    test.end();
});
