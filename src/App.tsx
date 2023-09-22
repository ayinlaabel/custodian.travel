import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Onboarding from "./components/Onboarding/Onboarding";

function App() {
  return (
    <div className="w-screen h-screen bg-[#A73439]">
      <div>
        <Onboarding />
      </div>
    </div>
  );
}

export default App;
