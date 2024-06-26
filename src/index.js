import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Clock from "./chapter_04/Clock";

const container = document.getElementById("root");
const root = createRoot(container);

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
reportWebVitals();
