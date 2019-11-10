import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Todos from '../containers/Todos';
import AddTodo from './AddTodo';
import FilterLink from '../containers/FilterLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo/>
        <Todos/>
        <FilterLink/>
      </header>
    </div>
  );
}

export default App;
