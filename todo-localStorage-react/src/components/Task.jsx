import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className="flex justify-between gap-3 w-[22rem]">
      <div className="flex gap-4 mt-2">
        <button className="" onClick={() => onComplete(task.id)}>
          {task.isCompleted ? (
            <BsFillCheckCircleFill className="text-green-500" />
          ) : (
            <BsCircle className="text-green-500" />
          )}
        </button>

        <p className={task.isCompleted ? "line-through" : ""}>{task.title}</p>
      </div>
      <button className="left-0" onClick={() => onDelete(task.id)}>
        <TbTrash
          className="text-red-700 hover:text-red-800 right-0"
          size={20}
        />
      </button>
    </div>
  );
}
