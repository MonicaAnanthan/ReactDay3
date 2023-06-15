import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ParentComponent from "./Components/ParentComponent";


function App(props) {

  return (
    <div className="App">
          <ParentComponent />
    </div>
  );
}

export default App;
