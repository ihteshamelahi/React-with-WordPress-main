import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NewTest from "./Test.jsx";
import Hooks from "./Hooks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Hooks />
  </StrictMode>
);
