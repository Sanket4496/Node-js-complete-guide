const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

// Reference Type
const hobbies = ['sports', 'cooking'];

// for(let hobby of hobbies){
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

hobbies.push('programming');

console.log(hobbies);


