class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Hound extends Animal {
  bark() {
    return `Hound ${this.name} is barking`;
  }
}

const bestDogEver = new Hound("Chapik");
console.log(bestDogEver.getName() === "Chapik");
console.log(bestDogEver.bark() === "Hound Chapik is barking");
