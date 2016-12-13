
// 1. Create a class for Animal
export class Animal {
  speak() {
    return 'generic sound';
  }
}

// 2. Create a prototype for an Animal
// - I think with the class, this is built in... I can 'extend' it, right?

// 3. subclass Animal with Reptile and Primate + Overwrite the speak  method for each.
export class Reptile extends Animal {
  speak() {
    return Reptile.SOUND;
  }
};
Reptile.SOUND = "I'm coverd in scales...";

export class Primate extends Animal {
  speak() {
    return Primate.SOUND;
  }
};
Primate.SOUND = "Quest for fire...";

// 4. subclass Primate with Human
export class Human extends Primate {
  speak(sound) {
    return sound
  }
};
Primate.SOUND = "Quest for fire...";

// I'm sure there are problems... since I hear people saying that classes are problematic...
// ... but this looks pretty elegant compared to my other versions...
// maybe I'm overthinking the stamps, because my guess is that it's supposed to be the most elegant.
