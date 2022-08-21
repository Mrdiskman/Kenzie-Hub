import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../../context/Login";
import { LoginStyle } from "./loginStyled";

function Login() {
  const { navigate, register, handleSubmit, onSubmitLogin, errors } =
    useContext(LoginContext);

  useEffect(() => {
    if (localStorage.getItem("@TOKEN")) {
      navigate("/isLoged")
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
