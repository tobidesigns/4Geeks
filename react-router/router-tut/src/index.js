import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
