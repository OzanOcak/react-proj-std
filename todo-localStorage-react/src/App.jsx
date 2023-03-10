import { Header } from "./components/Header.jsx";
import { Tasks } from "./components/Tasks.jsx";
import useLocalStorage from "./Hooks/useLocalStorage.jsx";

function App() {
  const { tasks, setTasksAndSave } = useLocalStorage();

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <div
      className="m-0 p-0 box-border font-serif bg-[#191919]
     text-[#F2F2F2] min-h-screen flex flex-col w-screen"
    >
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </div>
  );
}

export default App;
