// use substring
const greet = "Hello World";

const phoneCall = greet.substring(0, 5);

// console.log(phoneCall);

// use slice

const phoneCall2 = greet.slice(0, 5);
// console.log(phoneCall2);

// use js padding
const id = "711";

const fullId = id.padStart(6, "0");
// console.log(fullId);

const id2 = 1;

const fullId2 = id2.toString().padStart(7, "0");
// console.log(fullId2);

// loop

let mango = 0;
for (let i = 1; i <= 10; i++) {
  mango += i;
}
// console.log(mango);

// for of loop

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Jannah",
  "Mannah",
];

for (const name of names) {
  //   console.log(name);
}

// same in for loop

for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
}

// forin loop
const mentor = {
  name: "John Doe",
  age: 35,
  gender: "Male",
  expertise: ["JavaScript", "Web Development", "Programming"],
  experienceYears: 10,
  languagesSpoken: ["English", "Spanish"],
  contact: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  },
};

for (const key in mentor) {
  console.log(mentor[key]);
}
