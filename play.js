var name = "Max";
var age = 29;
var hasHobbies = true;

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

