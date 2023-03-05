import { Task } from "./Task";

export function Tasks({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="flex flex-col items-center ">
      <header className="flex justify-evenly gap-[4rem] py-2 w-[22rem] ">
        <div className="flex gap-2">
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div className="flex gap-2">
          <p className="">Completed tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <hr className="w-[22rem]" />

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
