import test from 'tape';
import { Animal } from './index';
import stampit from 'stampit';
import isStamp from 'stampit/isStamp';

test('Animal exists', function(test) {
  const animal = new Animal();

  test.ok( animal instanceof Animal, 'should create an instance of Animal' );

  test.end();
});
