import React from "react";

const Login = () => {
  return (
    <div className="bg-orange-200 w-[600px] h-[500px] rounded-3xl flex flex-col">
      <div className="flex p-2">
        <h1 className="flex text-5xl font-bold mx-4 my-7">Log in</h1>
      </div>
      <div className="flex gap-1">
        <label className="mx-4">Email:</label>
        <input
          className="rounded-sm"
          type="text"
          placeholder="Enter your email here"
        />
      </div>
    </div>
  );
};

export default Login;
