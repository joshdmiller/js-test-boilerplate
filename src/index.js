import stampit from 'stampit';

export function double ( x ) {
  return x * 2;
}

export function doubleXTimes ( x, num ) {
  let result = x;
  for ( let i = 1; i <= num; i++ ) {
    result = double( result );
  }
  return result;
}

export function doubleEach ( arr ) {
  return arr.map( double );
}

export const Animal = stampit({
  methods: {
    speak(sound) {
      return sound;
    }
  }
});

export const Reptile = stampit.compose(Animal);
export const Primate = stampit.compose(Animal);
export const Human = stampit.compose(Primate);
