import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['estudar', 'enriquecer', 'curtir a vida'];

function App() {
  return (
    <section>
      {compromissos.map(elements => task(elements))}
    </section>
  );
}

export default App;
