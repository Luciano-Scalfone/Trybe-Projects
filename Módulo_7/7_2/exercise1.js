const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


//<<<<< Exercicio 1 >>>>>>.

// const turnoManha = (object, turno, string) => {
//   return object[turno] = string;
// };
//
// turnoManha(lesson2, 'turno', 'Manhã');

//<<<<<  Exercicio 2 >>>>>

// const listOfKeys = (object) => {
//   const keys = Object.keys(object);
//   return keys
// };

//<<<<< Exercicio 3 >>>>>

// const objectLength = (obj) => Object.keys(obj).length;

//<<<<< Exercicio 4 >>>>>

// const listOfValues = (obj) => Object.values(obj);

//<<<<< Exercicio 5 >>>>>

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//<<<<< Exercicio 6 >>>>>

const numeroEst = () => {
  let output = 0;
  const arr = Object.keys(allLessons);
  for (let index in arr) {
    output += allLessons[arr[index]].numeroEstudantes;
  }
  return output
} ;

console.log(numeroEst());