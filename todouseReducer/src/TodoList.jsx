import Todo from "./Todo";

export default function TodoList({ todos, onDelete, onChange }) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="mb-2">
            <Todo todo={todo} onDelete={onDelete} onChange={onChange} />
          </li>
        );
      })}
    </ul>
  );
}
