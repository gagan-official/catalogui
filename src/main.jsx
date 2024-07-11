import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextComp from "./context/ContextComp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextComp>
      <App />
    </ContextComp>
  </React.StrictMode>
);
