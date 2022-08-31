import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginProvider } from "./context/Login";
import { RegisterProvider } from "./context/Register";
// 
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLAreaElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
      <RegisterProvider>
        <App />
        <ToastContainer theme="dark" />
        </RegisterProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);


