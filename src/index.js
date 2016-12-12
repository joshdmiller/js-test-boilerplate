import stampit from 'stampit';
//
export const Animal = stampit({
  props: {
    SOUND: "Generic sound"
  },
  methods: {
    speak(sound) {
      return sound;
    }
  }
});


export const Reptile = stampit().compose(Animal);

export const Primate = stampit().compose(Animal);

export const Human = stampit().compose(Primate);