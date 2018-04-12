import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// Hauptdatei. in ihr wird die komplette App gerendert
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
