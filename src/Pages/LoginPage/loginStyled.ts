import styled from "styled-components";

export const LoginStyle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  padding-bottom: 15.5%;

  button{
    cursor: pointer;
  }

  .error {
    border: 1px solid red;
  }

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  .title {
    color: #ff577f;
    margin-top: 20%;
    margin-bottom: 14.5%;
  }

  .log {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 22px;
    color: #f8f9fa;
    margin-bottom: 15%;
  }
  .loginPage {
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    min-height: 72vh;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
  }
  .inputLabelLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 88%;
    margin-right: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    gap: 25px;
    color: #f8f9fa;
  }
  input {
    width: 100%;
    height: 38.5px;
    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
  }

  .question {
    color: #f8f9fa;
    font-size: 14px;
    color: #868e96;
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }

  span {
    color: red;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }

  .buttonSend {
    width: 90%;
    height: 39px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #ffffff;
    margin-top: 10%;
    margin-bottom: 8%;
  }

  .buttonDontHaveRegister {
    width: 90%;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    height: 39px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #ffffff;
  }

  @media (min-width: 728px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    padding-bottom: 0%;

    .title {
      color: #ff577f;
      margin-top: 2%;
      margin-bottom: 5%;
    }

    .loginPage {
      background-color: red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 20%;
      height: 72vh;
      background: #212529;
      box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
      border-radius: 3.20867px;
      margin-bottom: 4.9%;
    }

    input {
      width: 100%;
      height: 48px;
      background: #343b41;
      border: 0.9772px solid #f8f9fa;
      border-radius: 3.20867px;
      font-size: 16px;
      color: #ffffff;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
    }
    span {
      color: red;
      margin: 0 auto;
    }

    .buttonSend {
      width: 90%;
      height: 48px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12.8347px;
      line-height: 21px;
      color: #ffffff;
      margin-top: 10%;
      margin-bottom: 8%;
    }

    .buttonDontHaveRegister {
      width: 90%;
      background: #868e96;
      border: 1.2182px solid #868e96;
      border-radius: 4px;
      height: 48px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12.8347px;
      line-height: 21px;
      color: #ffffff;
    }
  }
`;
