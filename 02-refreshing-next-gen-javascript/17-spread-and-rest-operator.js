const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

const person = {
    name: 'Max'
}
const newPerson = {
    ...person,
    age: 28
}

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(newNumbers);
console.log(newPerson);
console.log(filter(1,2,3));