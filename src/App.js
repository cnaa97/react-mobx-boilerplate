import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div className="App">
      <h3>Todo List</h3>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
