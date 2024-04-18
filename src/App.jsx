import React, { useState } from 'react';
import TodoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (text) => {
    if (text) { // ????
      setTodos([...todos, { text, completed: false, id: Math.random() }]);
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={(e) => e.preventDefault()}> {/* made the auto submit go away */}
        <input 
          type="text" 
          placeholder="Add a task" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo(inputValue);
              setInputValue(''); // clears whatever was typed
            }
          }}
        />
        <button type="button" onClick={() => {
          addTodo(inputValue);
          setInputValue(''); 
        }}>Add</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
