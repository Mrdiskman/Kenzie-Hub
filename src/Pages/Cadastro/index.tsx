import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OnSubmitRegisterProps, RegisterContext } from "../../context/Register";
import { CadStyled } from "./cadStyled";
import { useEffect } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../context/Register/validators";

function Cadastro() {
  const { onSubmitFunction } = useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnSubmitRegisterProps>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("@TOKEN")) {
      navigate("/isLoged");
    }
  }, []);
  return (
    <CadStyled>
      <div className="divTitle">
        <h1 className="tituloCad">Kenzie Hub</h1>
        <button onClick={() => navigate("/")} className="botaoVoltarCad">
          Voltar
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)} className="formCadastro">
        <h1 className="criaSuaConta">Crie sua conta</h1>
        <p className="isca">Rapido e grátis, vamos nessa</p>
        <label className="labelCad">
          Nome
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
            className={`inputCadastro ${errors.name && "error"}`}
          />
        </label>
        <span>{errors.name && errors.name.message}</span>
        <label className="labelCad">
          Email
          <input
            type="text"
            placeholder="Digite aqui seu email"
            className={`inputCadastro ${errors.email && "error"}`}
            {...register("email")}
          />
        </label>
        <span>{errors.email && errors.email.message}</span>
        <label className="labelCad">
          Senha
          <input
            type="text"
            placeholder="Digite aqui sua senha"
            {...register("password")}
            className={`inputCadastro ${errors.password && "error"}`}
          />
        </label>
        <span>{errors.password && errors.password.message}</span>
        <label className="labelCad">
          Confirmar Senha
          <input
            type="text"
            placeholder="Digite novamente sua senha"
            className={`inputCadastro ${
              errors.passwordAuthentication && "error"
            }`}
            {...register("passwordAuthentication")}
          />
        </label>
        <span>
          {errors.passwordAuthentication &&
            errors.passwordAuthentication.message}
        </span>
        <label className="labelCad">
          Bio
          <input
            className={`inputCadastro ${errors.bio && "error"}`}
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
        </label>
        <span>{errors.bio && errors.bio.message}</span>
        <label className="labelCad">
          Contato
          <input
            className={`inputCadastro ${errors.contact && "error"}`}
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
        </label>
        <span>{errors.contact && errors.contact.message}</span>
        <label className="labelCad">
          Selecione modulo
          <select {...register("course_module")} className="inputCadastro">
            <option value="Primeiro Módulo (Introdução de Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo Módulo (Introdução a POO)">
              Segundo Módulo
            </option>
            <option value="Terceiro Módulo (Conclusão de Frontend)">
              Terceiro Módulo
            </option>
            <option value="Quarto Módulo (Introdução ao Backend)">
              Quarto Módulo
            </option>
            <option value="Quinto Módulo (Introdução a Python)">
              Quinto Módulo
            </option>
            <option value="Sexto Módulo (Conclusão do Frontend)">
              Sexto Módulo
            </option>
          </select>
        </label>

        <button type="submit" className="botaoSubmitCad">
          Submit
        </button>
      </form>
    </CadStyled>
  );
}

export default Cadastro;
