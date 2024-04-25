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

const mentorKeys = Object.keys(mentor);

for (const key in mentor) {
  //   console.log(mentor[key]);
}

// same in for loop

for (let i = 0; i < mentorKeys.length; i++) {
  const key = mentorKeys[i];
  //   console.log(mentor[key]);
}

// forEach loop

const names2 = [
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

names2.forEach((value) => {
  //   console.log(value);
});

// find && filter

const mentorList = [
  {
    name: "John Doe",
    age: 35,
    gender: "Male",
  },
  {
    name: "Mohn Doe",
    age: 25,
    gender: "Male",
  },
  {
    name: "Gohn Doe",
    age: 45,
    gender: "Male",
  },
  {
    name: "Hohn Doe",
    age: 25,
    gender: "Male",
  },
];

const mentors25 = mentorList.filter((mentor25) => {
  if (mentor25.age === 25) {
    return mentor25;
  }
});

const mentors25e = mentorList.find((mentor25e) => mentor25e.age === 25);

// console.log(mentors25e);

// console.log(mentors25);
