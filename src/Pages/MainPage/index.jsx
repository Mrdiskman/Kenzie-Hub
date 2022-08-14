import { useNavigate } from "react-router-dom";
import { Header, Main } from "./header";

function MainPage() {
  const navigate = useNavigate();
  const dados = JSON.parse(localStorage.getItem("DadosDeUsuario"));

  const userName = dados.data.user.name;

  const modulo = dados.data.user.course_module;

  function limpar(){
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
      <Header>
        <h1 className="tituloMain">KenzieHub</h1>
        <button onClick={() => limpar()} className="botaoVoltarMain">
          Sair
        </button>
      </Header>

      <Main>
        <div className="container">
          <div className="divisoriaDeDados">
            <h1 className="nomeDeUsuario">{`Olá, ${userName}!!!`}</h1>
            <p className="moduloDoUsuario">{modulo}</p>
          </div>
          <div className="divAviso">
            <h1 className="aviso">Que pena! Estamos em Desenvolvimento :(</h1>
            <p className="paragrafoDeAviso">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </div>
      </Main>
    </>
  );
}

export default MainPage;
