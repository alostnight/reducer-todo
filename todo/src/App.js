import React from 'react';
import TodoForm from './components/todoForm'
import './components/todo.css';

function App() {
  return (
    <div className="App"> 
      <h1>Todo with Reducers!</h1>
      <TodoForm />
    </div>
  );
}

export default App;