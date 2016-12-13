
// 1. Create a constructor function for Animal
// - Why is this a constructor if it doesn't return anything?
// - The 'new' word uses it to make something...
// - I don't like that... it's too black-box...
export const Animal = function() {};

// 2. Create a prototype for an Animal,
// - Well, by creating an Object literal... it inherited a prototype from Object already...
// - How would I create a prototype without adding anything?
// - This will happen with the creating of speak() but, just following orders
Animal.prototype = function() {};

// 3. Create a function on Animal ‘s prototype called speak that returns the animal’s sound.
Animal.prototype.speak = function(sound = Animal.SOUND) {
  // default argument no bueno?
  // should I 'if' an argument instead?
  return 'generic sound';
}

// 4. Create two new constructors for Reptile and Primate
export const Reptile = function() {};
export const Primate = function() {}; // ** Unnecessary, right?

// 5. ...with prototypes that inherit from Animal
Reptile.prototype = Object.create(Animal.prototype);
Primate.prototype = Object.create(Animal.prototype); // **

// 6. Overwrite the speak  method for each.
Reptile.prototype.speak = function(sound = Reptile.SOUND) {
  return sound;
};
Primate.prototype.speak = function(sound = Primate.SOUND) {
  return sound;
};

// 6b. Looks like we need some SOUNDS...
// - I didn't understand what this was at first, but it's in the tests...
// - so, I have to give each constructor a 'constant' I guess...
// - "On the contrary... It is in uppercase because that's a common convention for constants defined on the constructor rather than on the prototype."
// - I still don't see the helpfulness of the all caps but I'm sure it's with reason to avoid some confusion
Reptile.SOUND = 'Slither slither';
Primate.SOUND = 'Ug ug';
// 6c. Go back up and add this as the default for speak()

// 7. Create one more that inherits from Primate called Human
export const Human = function() {};
Human.prototype = Object.create(Primate.prototype);
// I suppose the other's didn't need default sounds and I could have overrided that just here on Human.

// Feels funny to only create things in the tests haha

// Should this be worked into a factory function?
