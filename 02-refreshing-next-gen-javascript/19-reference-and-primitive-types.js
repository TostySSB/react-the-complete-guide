//primitive types
const number = 1;
const num2 = number; //This is a true copy, not a reference

//Objects and arrays are reference types
const person = {
    name:'Max'
};
const secondPerson = person; //This is a reference to the object, it stores a pointer to person
const thirdPerson = { //This is a true copy
    ...person
};

person.name = 'Manu';

console.log(secondPerson);
console.log(thirdPerson);