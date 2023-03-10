import { Task } from "./Task";
import TaskHeadInfo from "./TaskHeadInfo";

export function Tasks({ tasks, onDelete, onComplete }) {
  return (
    <section className="flex flex-col items-center ">
      <TaskHeadInfo tasks={tasks} />

      <div className="">
        {tasks.map((task) => (
          <Task
            className=""
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
}
