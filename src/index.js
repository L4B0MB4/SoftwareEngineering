import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// Main file. Every component will be rendered inside this file
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
