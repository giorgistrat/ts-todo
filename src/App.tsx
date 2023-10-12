import React, { useState } from 'react';
import './App.css';

import TodoList from './components/todolist.component';
import NewTodo from './components/newTodo.component';

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (text: string) => {
    console.log(text)
  };

  return (
    <div className="app">
      <NewTodo onAddToDo={todoAddHandler}/>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
