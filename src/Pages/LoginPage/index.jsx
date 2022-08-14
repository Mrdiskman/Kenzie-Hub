import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import {LoginStyle} from "./loginStyled"

function Login({ data }) {
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
        localStorage.setItem("DadosDeUsuario", JSON.stringify(res))
        toast.success("Sucesso!!!");
        navigate("/isLoged");
      })
      .catch((err) => toast.error("Email ou senha incorretos"));
  };
  return (
    <LoginStyle>
      <h1 className="title">Kenzie Hub</h1>
      <form onSubmit={handleSubmit(onSubmitLogin)} className="loginPage">
        <h2 className="log">Login</h2>
        <label className="inputLabelLogin">
          Email
          <input
            type="text"
            name="email"
            id=""
            placeholder="Exemplo@gmail.com"
            {...register("email")}
            className={`input ${errors.email && "error"}`}
          />
          <span>{errors.email && errors.email.message}</span>
        </label>
        <label className="inputLabelLogin">
          Senha
          <input
            type="password"
            name="password"
            id=""
            placeholder="***********"
            {...register("password")}
            className={`input ${errors.password && "error"}`}
          />
          <span>{errors.password && errors.password.message}</span>
        </label>
        <button type="submit" className="buttonSend">
          Enviar
        </button>
        <p className="question">Ainda não possui um cadastro?</p>
        <button onClick={() => navigate("/register")} className="buttonDontHaveRegister">Cadastre-se</button>
      </form>
    </LoginStyle>
  );
}

export default Login;
