import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Editform from "../components/Editform";

const SelfTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    setPosts([
      { id: Date.now(), text: inputValue, isTicked: false, isEditing: false },
      ...posts,
    ]);
    setInputValue("");
  };

  const toggleTick = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isTicked: !post.isTicked } : post
      )
    );
  };

  const toggleEdit = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isEditing: !post.isEditing } : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const updatePost = (id, inpt) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, text: inpt, isEditing: false } : post
      )
    );
  };

  const cancelMethod = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isEditing: false } : post
      )
    );
  };

  return (
    <div className="w-full max-w-[400px] min-h-[500px] max-h-[500px] bg-slate-900 rounded-3xl flex flex-col">
      {/* Fixed Header */}
      <div className="bg-slate-300 min-h-[50px] flex items-center justify-center rounded-t-3xl">
        <p className="font-extrabold">ToDo List</p>
      </div>

      {/* Input Area */}
      <div className="flex items-center px-4 py-2 space-x-2">
        <input
          className="px-4 py-1.5 rounded-md bg-slate-300 placeholder-slate-600"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="write your mind here...."
        />
        <button
          className="bg-slate-300 text-center text-base px-4 py-1.5 rounded-md font-semibold"
          onClick={addPost}
        >
          Add +
        </button>
      </div>

      {/* Scrollable Content Area */}
      <div className="bg-slate-900 flex-grow overflow-hidden px-4 pt-2 pb-4 flex flex-col">
        <div className="bg-slate-600 rounded-t-3xl p-5 flex-grow overflow-hidden flex flex-col">
          <div className="flex-grow overflow-hidden flex flex-col">
            {/* Scrollable List */}
            <ul className="space-y-2 flex-grow overflow-auto">
              {/* Set max height here */}
              {posts.map((post) =>
                post.isEditing ? (
                  <Editform
                    key={post.id}
                    post={post}
                    cancelMethod={cancelMethod}
                    updatePost={updatePost}
                  />
                ) : (
                  <li
                    className="bg-yellow-100 flex justify-between items-center p-2 rounded-md"
                    key={post.id}
                  >
                    <div className="flex space-x-2">
                      <input
                        type="checkbox"
                        checked={post.isTicked}
                        onChange={() => toggleTick(post.id)}
                      />
                      <span
                        className={`${post.isTicked ? "line-through" : ""}`}
                      >
                        {post.text}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <FaEdit onClick={() => toggleEdit(post.id)} />
                      <MdDelete onClick={() => deletePost(post.id)} />
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfTest;
