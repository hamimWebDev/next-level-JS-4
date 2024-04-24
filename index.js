// use substring
const greet = "Hello World";

const phoneCall = greet.substring(0, 5);

console.log(phoneCall);

// use slice

const phoneCall2 = greet.slice(0, 5);
console.log(phoneCall2);

// use js padding
const id = "711";

const fullId = id.padStart(6, "0");
console.log(fullId);

const id2 = 1;

const fullId2 = id2.toString().padStart(7, "0");
console.log(fullId2);

// loop

let mango = 0;
for (let i = 1; i <= 10; i++) {
    mango += i;
}
console.log(mango);
