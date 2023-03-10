export default function TaskHeadInfo({ tasks }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <>
      <header className="flex justify-evenly gap-[4rem] py-2 w-[22rem] ">
        <div className="flex flex-1 gap-2">
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div className="flex flex-2 gap-2">
          <p className="">Completed tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>
      <hr className="w-[23rem]" />
    </>
  );
}
