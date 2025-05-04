import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextComp from "./context/ContextComp.jsx";
import Timer from "./components/IncrementComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextComp>
      <App />
      {/* <Timer /> */}
    </ContextComp>
  </React.StrictMode>
);
