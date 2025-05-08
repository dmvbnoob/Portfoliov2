import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "@/routes/MainRouter";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);
