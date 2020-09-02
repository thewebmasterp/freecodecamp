function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

[Bird.prototype.constructor, Dog.prototype.constructor] = [Bird, Dog]

let duck = new Bird();
let beagle = new Dog();




