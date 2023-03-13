const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

function summerizeUser(userName, userAge, userHasHobbies){
    return (
      "Name is " +
      userName +
      ", age is " +
      userAge +
      " and user has hobbies: " +
      userHasHobbies
    );
}

console.log(summerizeUser(name, age, hasHobbies));

