import React from "react";
import ReactDOM from "react-dom/client";
import Scoreboard from "./Scoreboard.jsx";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Scoreboard />
    <App />
  </React.StrictMode>
);
