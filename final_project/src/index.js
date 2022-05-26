import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App.js";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </BrowserRouter>
);
