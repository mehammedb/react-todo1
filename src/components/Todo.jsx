import React, { useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const Todo = () => {
  // const inputRef = useRef();
  const [list, setList] = useState([]);

  const [todo, setTodo] = useState("");

  const Add = () => {
    if (todo === "" || todo === null) {
      alert("please type a todo!");
      return;
    }
    // const inputText = inputRef.current.value.trim();
    setList((pre) => [todo, ...pre]);
    setTodo("");
  };

  return (
    <div className="bg-white place-self-center w-11/12 mx-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To do list</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          // ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Enter your task"
        />
        <button
          onClick={Add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>

      <div>
        {list.map((todo) => (
          <Todoitems key={todo} text={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
