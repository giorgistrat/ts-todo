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

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="app">
      <NewTodo onAddToDo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
