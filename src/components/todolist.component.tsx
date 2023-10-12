import { TodoObj } from '../todo.model';

type TodoListProps = {
  items: TodoObj[];
  onDeleteTodo: (todoId: string) => void;
};

const TodoList = ({ items, onDeleteTodo }: TodoListProps) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
