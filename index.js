let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"]
};


for (let key in tortoiseOne) {
  console.log(`${key}: ${tortoiseOne[key]}`);
};

let keys = object.keys(tortoiseOne);

console.log(keys);


// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
