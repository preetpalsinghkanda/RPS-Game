import React from "react";
import Navbar from "./component/Navbar";
import Rules from "./component/Rules";
import Home from "./component/Home";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {/* <Rules/> */}
      <Home />

      <button className="border-2 self-end mx-10 border-[#ffffff91] relative bottom-67 tracking-widest font-semibold text-white rounded-lg px-10 py-2">
        RULES
      </button>
    </div>
  );
};

export default App;
