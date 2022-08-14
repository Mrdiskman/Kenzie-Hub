import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { CadStyled } from "./cadStyled";

function Cadastro({ data, setData }) {
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
    setData(dados);
  };
  const navigate = useNavigate();
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
            name="name"
            id=""
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
            name="email"
            id=""
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
            name="password"
            id=""
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
            name="passwordAuthentication"
            id=""
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
            name="bio"
            id=""
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
            name="contact"
            id=""
            placeholder="Opção de contato"
            {...register("contact")}
          />
        </label>
        <span>{errors.contact && errors.contact.message}</span>
        <label className="labelCad">
          Selecione modulo
          <select
            name="course_module"
            id=""
            {...register("course_module")}
            className="inputCadastro"
          >
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
