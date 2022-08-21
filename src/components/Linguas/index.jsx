import axios from "axios";
import img from "./excluir.png"
import { toast } from "react-toastify";
import { ContainerTecnologias } from "./style";

function Linguas({ tecnologias }) {
  function removeLinguagem(id) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
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
  console.log(tecnologias);
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
