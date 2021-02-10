class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);

    this._subject = subject;
  };

  greeting = function () {
    let prefix;
  
    if (this.gender === 'Male') {
    prefix = 'Mr.';
  } else if (this.gender === 'Female') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }
  
    alert(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
  };

  get subject() {
    return this._subject;
  };

  set subject(newSubject) {
    this._subject = newSubject;
  };
};

let marcio = new Teacher('Marcio', 'Rodrigues', 26, 'Male', ['gym', 'dance', 'travel'], 'dance');

// Object.defineProperty