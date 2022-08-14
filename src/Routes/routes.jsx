import { Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/LoginPage";
import { useState } from "react";
import MainPage from "../Pages/MainPage";

function RoutsMap() {
  const [data, setData] = useState({})
  return (
    <Routes>
      <Route exact path="/" element={<Login data={data}/>}/>
      <Route path="/register" element={<Cadastro setData={setData} data={data}/>}/>
      <Route path="/isLoged" element={<MainPage/>}/>
    </Routes>
  );
}
export default RoutsMap;
