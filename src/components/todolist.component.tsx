type TodoObjType = {
  id: string;
  text: string;
};

type TodoListProps = {
  items: TodoObjType[];
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
