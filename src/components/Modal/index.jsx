import { Overlay } from "./styled";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

function Modal({ modal, setModal }) {
  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatorio"),
    status: yup.string().required("Status obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const submitTech = (dados) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Sucesso!!!");
        console.log(res);
        // toast.success("Sucesso!!!");
        setModal(false);
      })
      .catch((err) => console.log(err));
    //   .catch((err) => toast.error("Erro ao adicionar"));
  };
  return (
    <>
      {modal && (
        <Overlay>
          <div className="modalContainer">
            <div className="modalHeader">
              <h1 className="TituloModal">Cadastrar Tecnologia</h1>
              <button onClick={() => setModal(false)} className="fecharModal">
                X
              </button>
            </div>
            <form
              onSubmit={handleSubmit(submitTech)}
              className="formularioModal"
            >
              <p className="labelModal">Nome</p>
              <input
                type="text"
                name="title"
                {...register("title")}
                className="inputName"
              />
              <p className="labelModal">Selecionar status</p>

              <select name="status" id="" {...register("status")} className="inputName">
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediario</option>
                <option value="Avançado">Avançado</option>
              </select>

              <button type="submit" className="cadTec">Cadastrar Tecnologia</button>
            </form>
          </div>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
