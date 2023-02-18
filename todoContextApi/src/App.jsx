import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import { TodosProvider } from "./TodosContext.jsx";

export default function App() {
  return (
    <TodosProvider>
      <AddTodo />
      <TaskList />
    </TodosProvider>
  );
}
