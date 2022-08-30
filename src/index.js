import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChildComp from "./components/Function/ChildComp";
import Comp from "./components/Function/Comp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
