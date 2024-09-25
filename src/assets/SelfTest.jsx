import React from "react";

const SelfTest = () => {
  return (
    <div className="w-[400px] h-[500px] bg-slate-900 rounded-3xl flex flex-col">
      <div className="bg-slate-300 w-full h-[50px] flex items-center justify-center rounded-t-3xl">
        <p className="font-extrabold">ToDo List</p>
      </div>

      <div className="w-full flex items-center px-4 py-2 space-x-2">
        <input
          className="px-4 py-1.5 rounded-md bg-slate-300 placeholder-slate-600"
          type="text"
          placeholder="write your mind here...."
        />
        <button className="bg-slate-300 text-center text-base px-4 py-1.5 rounded-md font-semibold">
          Add +
        </button>
      </div>

      <div className="bg-slate-900 flex-1 pt-2 pr-4 pb-4 pl-4 flex">
        <div className="bg-slate-600 flex-1 rounded-t-3xl px-3 py-8">
          <div className="bg-white">hhhhh</div>
        </div>
      </div>
    </div>
  );
};

export default SelfTest;
