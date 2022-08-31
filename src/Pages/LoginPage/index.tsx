import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginContext, OnSubmitLoginProps } from "../../context/Login";
import { formSchema } from "../../context/Register/validators";
import { LoginStyle } from "./loginStyled";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnSubmitLoginProps>({
    resolver: yupResolver(formSchema),
  });

  const { onSubmitLogin } = useContext(LoginContext);

  useEffect(() => {
    if (localStorage.getItem("@TOKEN")) {
      navigate("/isLoged");
    }
  }, []);

  return (
    <LoginStyle>
      <h1 className="title">Kenzie Hub</h1>
      <form onSubmit={handleSubmit(onSubmitLogin)} className="loginPage">
        <h2 className="log">Login</h2>
        <label className="inputLabelLogin">
          Email
          <input
            type="text"
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
        <button
          onClick={() => navigate("/register")}
          className="buttonDontHaveRegister"
        >
          Cadastre-se
        </button>
      </form>
    </LoginStyle>
  );
}

export default Login;
