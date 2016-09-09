export class Animal {
  constructor ( sound = 'generic sound' ) {
    this.sound = sound;
  }

  speak () {
    return this.sound;
  }
}

export class Primate extends Animal {
  constructor () {
    super( 'ooh ahah!' );
  }
}

