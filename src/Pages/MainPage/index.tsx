import { useNavigate } from "react-router-dom";
import { Header, Main } from "./header";
import { useState, useEffect } from "react";
import Linguas from "../../components/Linguas";
import Modal from "../../components/Modal";
import axios from "axios";
import React from "react";
import { TechProps } from "../../context/Techs/interfaces";

interface IUserData{
  techs: TechProps[]
  name: string
  course_module: string
}

function MainPage() {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN")||"");
    axios
      .get("https://kenziehub.herokuapp.com/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, [userData.techs]);

  const navigate = useNavigate();

  function limpar() {
    localStorage.clear();
    navigate("/");
  }
  
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header>
        <h1 className="tituloMain">KenzieHub</h1>
        <button onClick={() => limpar()} className="botaoVoltarMain">
          Sair
        </button>
      </Header>

      <Main>
        <div className="container">
          <div className="divisoriaDeDados">
            <h1 className="nomeDeUsuario">{`Olá, ${userData.name}!!!`}</h1>
            <p className="moduloDoUsuario">{userData.course_module}</p>
          </div>
       
          <div className="linguagens">
            <h1 className="tecnologia">Tecnologias</h1>
            <Modal setModal={setModal} modal={modal} />
            <button
              className="adicioneLinguagem"
              onClick={() => setModal(true)}
            >
              +
            </button>
          </div>
          <div className="containerLinguas">
            <Linguas tecnologias={userData.techs}/>
          </div>
     
        </div>
      </Main>
    </>
  );
}

export default MainPage;
