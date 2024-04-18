import React from 'react';

function TodoItem({ todo, toggleCompleted, handleDelete }) {
  const style = todo.completed ? { textDecoration: 'line-through' } : {};

  return (
    <li style={style}>
      <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
