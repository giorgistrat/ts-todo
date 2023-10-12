import React, { useState } from 'react';
import './App.css';

import TodoList from './components/todolist.component';
import NewTodo from './components/newTodo.component';

import { TodoObj } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random().toString(), text: text }];
    });
  };

  return (
    <div className="app">
      <NewTodo onAddToDo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
