class Person {
  constructor(first, last, age, gender, interests) {
    this.name = { first, last };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };

  bio = function () {
    let hobbies;

    for (let i = 0; i <= this.interests.length - 1; i++) {
      if (!hobbies) {
        hobbies = `${this.interests[i]}, `;
      } else if (i === this.interests.length - 1) {
        hobbies += `${this.interests[i]}`;
      } else {
        hobbies += `${this.interests[i]}, `;
      };
    };

    if (this.gender === 'Male') return alert(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${hobbies}.`);

    alert(`${this.name.first} ${this.name.last} is ${this.age} years old. She likes ${hobbies}.`);
  };

  greeting = function () {
    alert(`Hi! I'm ${this.name.first}.`);
  };

  farewell = function () {
    alert(this.name.first + ' has left the building. Bye for now!');
  };

  fullName = function () {
    alert(`${this.name.first} ${this.name.last}`);
  };
};

let Luciano = new Person('Luciano', 'Scalfone', 25, 'Male', ['coding', 'travel', 'sleep', 'repeat']);
let Hanna = new Person('Hanna', 'Franca', 21, 'Female', ['coding', 'travel', 'sleep', 'repeat']);
