import { useRef } from 'react';

import './newTodo.css';

type NewTodoProps = {
  onAddToDo: (text: string) => void;
};

const NewTodo = ({ onAddToDo }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    onAddToDo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler} className="form-control">
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
