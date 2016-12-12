import stampit from 'stampit';
//

export const Animal = stampit();

// I don't understand why there is an object being passed in here...
const SelfAwareStamp = stampit.init(({ instance, stamp }) => {
  instance.getStamp = () => stamp;
});

export const SelfAwareAnimal = Animal.compose(SelfAwareStamp);
