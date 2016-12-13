import stampit from 'stampit';
//
export const Animal = stampit({
  properties: {
    SOUND: "generic sound"
  },
  methods: {
    speak(sound = this.SOUND) {
      return sound;
    }
  }
});

export const Reptile = stampit().compose(Animal).properties({SOUND: 'reptile sound'});

export const Primate = stampit().compose(Animal).properties({SOUND: 'primate sound'});

export const Human = stampit().compose(Primate).properties({SOUND: 'human sound'});
