// A prototype is a property of an object that points to another object
function Animal (name, energy) {
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;

    return animal;
}

Animal.prototype.eat = function(amount) {
    console.log(`${this.name} is eating`)
    this.energy += amount
};
Animal.prototype.sleep = function(length) {
    console.log(`${this.name} is sleeping`)
    this.energy += length
};
Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing`)
    this.energy -= length
};

const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 5);