import styled from "styled-components";

export const ContainerTecnologias = styled.ul`
  margin: 0 auto;
  min-width: 57.5vw;
  width: max-content;
  height: max-content;
  background: #212529;
  border-radius: 5px;
  margin-right: 22px;
  padding-left: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  

  .listaTecnologias {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding-right: 25px;
    background: #121214;
    border-radius: 5px;
    margin-top: 11px;
    margin-bottom: 11px;
    padding-left: 22.5px;
    width: 62vw;
  }

  .listaTecnologias:hover {
    background: #343b41;
    transition: 0.4s;
  }
  .divDaLista {
    display: flex;
    gap: 5px;
    /* margin-left: 41%; */
  }

  .tituloTecnologia {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }
  .statusTecnologia {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
    color: #868e96;
  }
  .foto {
    background: transparent;
  }

  .botaoExluir {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 15px;
    height: 15px;
    margin-top: 14px;
    border-radius: 50px;
    border: none;
    background-color: #ff6347;
    color: #f8f9fa;
    font-weight: 400;
    cursor: pointer;
  }

  .botaoExluir:hover {
    background-color: red;
    transition: 1s;
  }
  @media (min-width: 720px){
    margin: 0 auto;
  min-width: 57.5vw;
  width: max-content;
  height: max-content;
  background: #212529;
  border-radius: 5px;
  margin-right: 22px;
  padding-left: 22px;

  .listaTecnologias {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding-right: 25px;
    background: #121214;
    border-radius: 5px;
    margin-top: 11px;
    margin-bottom: 11px;
    padding-left: 22.5px;
  }
  .listaTecnologias:hover {
    background: #343b41;
    transition: 0.4s;
  }
  .divDaLista {
    display: flex;
    gap: 25px;
  }

  .tituloTecnologia {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #f8f9fa;
  }
  .statusTecnologia {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #868e96;
  }
  .foto {
    background: transparent;
  }

  .botaoExluir {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20px;
    height: 20px;
    margin-top: 14px;
    border-radius: 50px;
    border: none;
    background-color: #ff6347;
    color: #f8f9fa;
    font-weight: 400;
    cursor: pointer;
  }

  .botaoExluir:hover {
    background-color: red;
    transition: 1s;
  }
  }
`;
