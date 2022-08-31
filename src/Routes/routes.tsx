import React from "react";
import { Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/LoginPage";
import MainPage from "../Pages/MainPage";

function RoutsMap() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Cadastro />} />
      <Route path="/isLoged" element={<MainPage />} />
    </Routes>
  );
}
export default RoutsMap;
