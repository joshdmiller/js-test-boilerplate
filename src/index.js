// export function Animal () {
//
// }
//
// Animal.prototype.speak = function() {
//     return 'generic sound';
// }
//
//
// export function Reptile() {
//     this.SOUND = 'reptile sound';
// }
//
// export function Primate() {
//     this.SOUND = 'primate sound';
// }
//
// Reptile.prototype = Object.create(Animal.prototype)
//
// Reptile.prototype.speak = function () {
//     return this.SOUND;
// };
//
//
// Primate.prototype = Object.create(Animal.prototype)
//
// Primate.prototype.speak = function () {
//     return this.SOUND;
// }
//
// export function Human() {}
//
// Human.prototype = Object.create(Primate.prototype)
//
// Human.prototype.speak = function (word) {
//     return word
// }

// IN ES6
export class Animal {
    constructor() {};

    speak() {
        return 'generic sound';
    }
}

export class Reptile extends Animal {

    constructor() {
        super();
        this.SOUND = 'reptile sound'
    };


    speak() {
        return this.SOUND;
    }
}

export class Primate extends Animal {
    constructor() {
        super();
        this.SOUND = 'primate sound'
    };

    speak() {
        return this.SOUND;
    }
}

export class Human extends Primate {
    speak(words) {
        return words;
    }
}
