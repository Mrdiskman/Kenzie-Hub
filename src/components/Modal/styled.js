import styled from "styled-components";

export const Overlay = styled.div`
  z-index: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(18, 18, 20, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContainer {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 400px;
    background: #212529;
    border-radius: 5px;
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .modalHeader {
    display: flex;
  }

  .TituloModal {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }

  .fecharModal {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .formularioModal {
    display: flex;
    flex-direction: column;
  }
  .labelModal {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
    margin-left: 5%;
  }

  .inputName {
    margin: 0 auto;
    width: 90%;
    height: 40px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14x;
    line-height: 26px;
    color: #f8f9fa;
  }

  .cadTec {
    width: 90%;
    margin: 0 auto;
    height: 40px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4px;
    margin-top: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  @media (min-width: 720px) {
    z-index: auto;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(18, 18, 20, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modalContainer {
      background-color: white;
      display: flex;
      flex-direction: column;
      width: 40%;
      max-width: 400px;
      background: #212529;
      border-radius: 5px;
    }

    .modalHeader {
      display: flex;
      justify-content: space-between;
      background: #343b41;
      border-radius: 4px 4px 0px 0px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .modalHeader {
      display: flex;
    }

    .TituloModal {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #f8f9fa;
    }

    .fecharModal {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #868e96;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .formularioModal {
      display: flex;
      flex-direction: column;
    }
    .labelModal {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 0px;
      color: #f8f9fa;
      margin-left: 5%;
    }

    .inputName {
      margin: 0 auto;
      width: 90%;
      height: 40px;
      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14x;
      line-height: 26px;
      color: #f8f9fa;
    }

    .cadTec {
      width: 90%;
      margin: 0 auto;
      height: 40px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4px;
      margin-top: 30px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;
      color: #ffffff;
      margin-bottom: 20px;
    }
  }
`;
