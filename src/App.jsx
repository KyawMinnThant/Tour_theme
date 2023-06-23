import React from "react";
import { Route, Routes } from "react-router-dom";
import Path from "./routes/Path";
import "animate.css";
import "./App.css";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Path />
    </div>
  );
};

export default App;
