import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header
      className="bg-gray-700 flex flex-col items-center justify-center gap-[.4rem]
     py-[.5rem] h-[8rem]"
    >
      <h1 className="text-green-500 text-lg">
        To<span className="text-blue-500">Do</span>
      </h1>

      <form onSubmit={handleSubmit} className="flex">
        <input
          className=" text-black mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
           placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 
           block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button className="flex items-center  bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-500">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
