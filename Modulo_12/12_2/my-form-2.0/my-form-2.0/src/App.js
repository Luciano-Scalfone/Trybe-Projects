import React from 'react';
import Form from './Form';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
      </Provider>
    </div>
  );
}

export default App;
