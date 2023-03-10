import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";
import { TbTrash, TbEdit } from "react-icons/tb";
import { useState } from "react";

export function Task({ task, onDelete, onComplete }) {
  let [isModelOn, setIsModelOn] = useState(null);
  return (
    <div className="flex justify-between gap-3 w-5/7 ">
      <div className="flex gap-4 mt-2 w-5/6">
        <button className="" onClick={() => onComplete(task.id)}>
          {task.isCompleted ? (
            <BsFillCheckCircleFill className="text-green-500" />
          ) : (
            <BsCircle className="text-green-500" />
          )}
        </button>

        <p className={task.isCompleted ? "line-through" : ""}>{task.title}</p>
      </div>
      <div className="w-1/6 gap-[1rem]">
        <button onClick={() => {}}>
          <TbEdit className="text-green-700 hover:text-green-800 ml-.4" />
        </button>
        <button className="mx-1" onClick={() => onDelete(task.id)}>
          <TbTrash className="text-red-700 hover:text-red-800" size={20} />
        </button>
      </div>
    </div>
  );
}
