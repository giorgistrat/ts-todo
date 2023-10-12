import { TodoObj } from '../todo.model';

type TodoListProps = {
  items: TodoObj[];
};

const TodoList = ({ items }: TodoListProps) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
