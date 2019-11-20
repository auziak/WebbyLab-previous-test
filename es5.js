function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function() {
  return this.name;
};

function Hound(name) {
  Animal.call(this, name);
}

Hound.prototype = Object.create(Animal.prototype);

Hound.prototype.bark = function() {
  return "Hound " + this.name + " is barking";
};

var bestDogEver = new Hound("Chapik");
console.log(bestDogEver.getName() === "Chapik");
console.log(bestDogEver.bark() === "Hound Chapik is barking");
