class Student extends Person {
  constructor(first, last, age, gender, interests, id) {
    super(first, last, age, gender, interests);

    this.id = id;
  };

  greeting = function() {
    alert(`What's up! My name is ${this.name.first}.`);
  };
};

let stalone = new Student('Stalone', 'Scalfone', 15, 'Male', ['eat', 'sleep', 'party'], 1);
