import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { TechProps } from "../../context/Techs/interfaces";
import { ContainerTecnologias } from "./style";



interface LinguasProps{
  tecnologias: TechProps[]
}

function Linguas({ tecnologias } : LinguasProps) {
  function removeLinguagem(id:string) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")||"");
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.warning("Excluido com sucesso!!!");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
 
  return (
    <ContainerTecnologias className="ulTec">
      {tecnologias?.map((elem, index) => (
        <li key={index} className="listaTecnologias">
          <h3 className="tituloTecnologia">{elem.title}</h3>
          <div className="divDaLista">
            <p className="statusTecnologia">{elem.status}</p>
            <button onClick={() => removeLinguagem(elem.id)} className="botaoExluir">x</button>
          </div>
        </li>
      ))}
    </ContainerTecnologias>
  );
}

export default Linguas;
