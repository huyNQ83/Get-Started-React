
import { useState } from 'react';
import './App.css';

function App() {
  const [ todos, setTodos ] = useState([]);
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ todos", todos)

  const getTodo = () => {
    const todoList = document.querySelector('#todoList').value
    console.log("🚀 ~ file: App.js ~ line 11 ~ getTodo ~ todoList", todoList)

    document.querySelector('#todoList').value = '';

    setTodos([...todos, todoList]);
  }

  return (
    <div className ='App'>
      <h1>What needs to be done?</h1>
      <input type="text" id='todoList'></input>
      <button onClick={getTodo}>Add #{todos.length + 1}</button>

      <ul>
        { todos.map((todo, ids) =>(
          <li key={ids}>{todo}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
