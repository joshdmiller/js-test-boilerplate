export class Animal {
    constructor () {}

    static SOUND = 'generic sound';

    speak() {
        return Animal.SOUND;
    }
}

export class Reptile extends Animal {
    constructor () {
        super();
    }

    static SOUND = 'Roar';

    speak() {
        return Reptile.SOUND;
    }
}

export class Primate extends Animal {
    constructor() {
        super();
    }

    static SOUND = 'Ooh Ooh Eeh!';
    speak() {
        return Primate.SOUND;
    }
}

export class Human extends Primate {
    constructor() {
        super();
    }
    speak(message) {
        return message;
    }
}