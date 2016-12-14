// import test from 'tape';
// import { double, doubleXTimes, doubleEach } from './index';
//
// test( 'double fn', function ( test ) {
//   const actual = double( 5 );
//   const expected = 10;
//
//   test.equal( actual, expected, 'should double the value' );
//
//   test.end();
// });
//
// test( 'doubleXTimes', function ( test ) {
//   const actual = doubleXTimes( 5, 3 );
//   const expected = 40;
//
//   test.equal( actual, expected, 'should double 5 three times' );
//
//   test.end();
// });
//
// test( 'doubleEach', function ( test ) {
//   const actual = doubleEach([ 0, 1, 2 ]);
//   const expected = [ 0, 2, 4 ];
//
//   test.deepEqual( actual, expected, 'should double each in the array' );
//
//   test.end();
// });

import test from 'tape';
import {Animal, Reptile, Primate} from './index';

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

    expected = Reptile.SOUND;
    actual = reptile.speak();
    test.equal( actual, expected, 'should make a reptile sound when it speaks' );
    test.end();
})

test('primate', function (test) {


    const primate = new Primate();

    test.ok( primate instanceof Primate, 'should be an instance of Primate' );
    test.ok( primate instanceof Animal, 'should be an instance of Animal' );

    expected = Primate.SOUND;
    actual = primate.speak();
    test.equal( actual, expected, 'should make a primate sound when it speaks' );

    test.end();
});
