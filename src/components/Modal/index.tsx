import { Overlay } from "./styled";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import React from "react";



interface ModalProps{
  modal: Boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface DataProps{
  title: string
  status: string
}


function Modal({ modal, setModal }: ModalProps) {
  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatorio"),
    status: yup.string().required("Status obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: yupResolver(formSchema),
  });
  const submitTech = (dados: DataProps) => {
    console.log(dados)
    const token = JSON.parse(localStorage.getItem("@TOKEN")||"");
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Sucesso!!!");
        console.log(res);
       
        setModal(false);
      })
      .catch((err) => console.log(err));
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
                {...register("title")}
                className="inputName"
              />
              <p className="labelModal">Selecionar status</p>

              <select   id="" {...register("status")} className="inputName">
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
