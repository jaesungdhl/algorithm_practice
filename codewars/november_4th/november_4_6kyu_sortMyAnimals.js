Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If null is passed, the method should return null. If an empty list is passed, it should return an empty list back.

function sortAnimal(animal) {
    return animal === null ? null : animal.length === 0 ? [] : animal.sort((a,b) => a.name > b.name).sort((a,b) => a.numberOfLegs - b.numberOfLegs);
  }

  
  const compareAnimals = (a, b) =>
  a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
  
const sortAnimal = animals =>
  animals ? animals.slice().sort(compareAnimals) : null