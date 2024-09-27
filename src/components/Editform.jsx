import React, { useState } from "react";

const Editform = ({ post, cancelMethod, updatePost }) => {
  const [inputValue, setInputValue] = useState(post.text);

  return (
    <div className="flex items-center py-1 space-x-2">
      <input
        className="flex-grow min-w-[100px] px-4 py-1.5 rounded-md bg-slate-300 placeholder-slate-600" //flex-grow min-w-[100px] max-w-full
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={`Your text was: ${post.text}`}
      />
      <button
        className="bg-slate-300 text-center text-base px-4 py-1.5 rounded-md font-semibold "
        onClick={() => {
          updatePost(post.id, inputValue);
        }}
      >
        Update
      </button>
      <button
        className="bg-red-300 text-center text-base px-4 py-1.5 rounded-md font-semibold "
        onClick={() => {
          cancelMethod(post.id);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default Editform;
