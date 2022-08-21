import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
const { createContext } = require("react");

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup.string().required("Senha obrigatoria"),
  });
  const navigate = useNavigate();
  useEffect(() => console.log());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitLogin = (dados) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", dados)
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("@TOKEN", JSON.stringify(token));
        localStorage.setItem("@UserId", JSON.stringify(user.id));
        toast.success("Sucesso!!!");
        navigate("/isLoged");
      })
      .catch((err) => toast.error("Email ou senha incorretos"));
  };
  return <LoginContext.Provider value={{formSchema, register, handleSubmit, onSubmitLogin, errors, navigate}}>{children}</LoginContext.Provider>;
};
