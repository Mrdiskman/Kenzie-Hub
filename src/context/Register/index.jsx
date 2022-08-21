import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
const { createContext, useState } = require("react");


export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [dados, setDados] = useState({}) 
    const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@!#])[0-9a-zA-Z$*&!@#]{8,}$/,
        "Deve conter 8 caracteres e ao menos um numero, uma letra maiuscula e simbolo"
      ),
      
    passwordAuthentication: yup
      .string()
      .oneOf([yup.ref("password")], "Senha incorreta")
      .required("Confirmação de senha obrigatoria"),
    bio: yup.string().required("Bio obrigatoria"),
    contact: yup
      .string()
      .required("Contato obrigatorio")
      .matches(
        "([0-9]{2,3})?(([0-9]{2}))([0-9]{4,5})([0-9]{4})",
        "Telefone invalido"
      ),
  });
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (dados) => {
    const { passwordAuthentication, ...rest } = dados;
    axios
      .post("https://kenziehub.herokuapp.com/users", rest)
      .then((res) => {
        toast.success(`Cadastro realizado com sucesso!!!`);
        navigate("/");
      })
      .catch((err) => toast.error(`Ops, algo deu errado!!!`));
      }

    return(
        <RegisterContext.Provider value={{register, handleSubmit, navigate, onSubmitFunction, errors}}>{children}</RegisterContext.Provider>
    )
}