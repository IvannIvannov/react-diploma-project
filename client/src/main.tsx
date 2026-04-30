import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CoursesProvider } from "./context/CoursesProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </AuthProvider>
  </React.StrictMode>,
);
