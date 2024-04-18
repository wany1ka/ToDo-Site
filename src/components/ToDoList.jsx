import React from 'react';
import TodoItem from './ToDoItem';

function TodoList({ todos, setTodos }) {
  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    
    <ul>
        
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={() => handleToggleCompleted(todo.id)}
          handleDelete={() => handleDelete(todo.id)}
        />
      ))}

      
    </ul>

);
}


export default TodoList;
