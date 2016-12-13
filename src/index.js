import stampit from 'stampit';
//
export const Animal = stampit({
  props: {
    SOUND: "generic sound"
  },
  methods: {
    speak(sound = this.SOUND) {
      return sound;
    }
  }
});

export const Reptile = stampit().compose(Animal);

export const Primate = stampit().compose(Animal);

export const Human = stampit().compose(Primate);
