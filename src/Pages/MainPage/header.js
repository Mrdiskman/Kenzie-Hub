import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
  background: #121214;
  padding-bottom: 25px;

  .tituloMain {
    color: #ff577f;
    height: 40px;
    font-size: 30px;
    margin-bottom: 0;
  }

  .botaoVoltarMain {
    width: 60px;
    height: 40px;
    border: #212529;
    background: #212529;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 28px;
    text-align: center;
    color: #f8f9fa;
    margin-top: 5%;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50%;
    background: #121214;
    padding-bottom: 25px;

    .tituloMain {
      color: #ff577f;
      height: 40px;
      font-size: 30px;
      margin-bottom: 0;
    }

    .botaoVoltarMain {
      width: 60px;
      height: 40px;
      background: #212529;
      border-radius: 4px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 28px;
      text-align: center;
      color: #f8f9fa;
      margin-top: 1%;
      cursor: pointer;
    }
  }
`;
export const Main = styled.main`
  height: 100vh;
  background-color: #121214;
  padding-left: 4%;

  .divisoriaDeDados {
    border-bottom: #212529 2px solid;
    border-top: #212529 2px solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 33%;
    padding-top: 45px;
    padding-bottom: 45px;
  }

  .nomeDeUsuario {
    margin-top: 0px;
    color: #f8f9fa;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  .moduloDoUsuario {
    color: #f8f9fa;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #868e96;
  }

  .aviso {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  .containerLinguas {
    background-color: #f8f9fa;
    color: red;
    width: max-content;
    margin: 0 auto;
    margin-right: 19vw;
    height: max-content;
    background: #212529;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .paragrafoDeAviso {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  .linguagens {
    display: flex;
    gap: 17%;
    margin-left: 4%;
    margin-bottom: 4%;
  }

  .adicioneLinguagem {
    width: 35px;
    height: 34px;
    background: #212529;
    border-radius: 4px;
    color: #f8f9fa;
    border: none;
    margin-top: 5px;
    font-size: 24px;
  }

  .tecnologia {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
    color: #f8f9fa;
  }

  .divAviso {
    padding-top: 30px;
    padding-left: 19.8%;
  }
  @media (min-width: 768px) {
    height: 100vh;
    background-color: #121214;
    padding-left: 0%;

    .divisoriaDeDados {
      border-bottom: #212529 2px solid;
      border-top: #212529 2px solid;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 38%;
      padding-right: 6.5%;
      padding-top: 45px;
      padding-bottom: 45px;
      margin-bottom: 20px;
      padding-left: 5%;
    }

    .nomeDeUsuario {
      margin-top: 0px;
      color: #f8f9fa;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }

    .moduloDoUsuario {
      color: #f8f9fa;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      color: #868e96;
    }

    .aviso {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }

    .paragrafoDeAviso {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }

    .divAviso {
      padding-top: 30px;
      padding-left: 19.8%;
    }

    .linguagens {
    display: flex;
    gap: 43.5%;
    margin-left: 4%;
    margin-bottom: 4%;
    margin-left: 18.5%;
  }
  }

  .tecnologia {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
    color: #f8f9fa;
    margin-right: 25%;
  }

 
`;
