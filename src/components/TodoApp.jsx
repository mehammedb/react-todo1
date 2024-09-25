import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]);

  const handleAddPost = () => {
    if (inputValue.trim()) {
      setPosts([...posts, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  const toggleComplete = (index) => {
    const newPosts = posts.map((post, i) =>
      i === index ? { ...post, completed: !post.completed } : post
    );
    setPosts(newPosts);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddPost}>Add</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={post.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                textDecoration: post.completed ? "line-through" : "none",
              }}
            >
              {post.text}
            </span>
            <button onClick={() => handleDeletePost(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
