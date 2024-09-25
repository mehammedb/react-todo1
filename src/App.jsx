import React from "react";
import SelfTest from "./assets/SelfTest";
import ClsTest from "./components/ClsTest";

const App = () => {
  return (
    <div className="bg-slate-500 w-full max-w-[1440px] h-screen m-auto flex justify-center items-center">
      {/* <img className="w-24 h-28" src="./assets/me.jpg" alt="" /> */}
      {/* <Login /> */}
      {/* <TodoApp /> */}
      {/* <SelfTest /> */}
      <ClsTest />
    </div>
  );
};

export default App;
