export function Animal () {

}

Animal.prototype.speak = function() {
    return 'generic sound';
}


export function Reptile() {
    this.SOUND = 'reptile sound';
}

export function Primate() {
    this.SOUND = 'primate sound'
}

Reptile.prototype = Object.create(Animal.prototype)

Reptile.prototype.speak = function () {
    return this.SOUND;
};


Primate.prototype = Object.create(Animal.prototype)

Primate.prototype.speak = function (sound) {
    return this.SOUND;
}
