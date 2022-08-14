import styled from "styled-components";

export const CadStyled = styled.div`
  background-color: black;
  padding-bottom: 30px;

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  .formCadastro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 92%;
  background: #212529;
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;
}

span {
    color: red;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 12px;
    margin-bottom: 5px;
  }

.inputCadastro {
  width: 90%;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #f8f9fa;
  background-color: #343b41;
  border: 0.973988px solid #343b41;
  border-radius: 3.19812px;
  height: 39px;
}

.labelCad {
  padding-left: 8%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  color: #f8f9fa;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 100%;
}

.criaSuaConta {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #f8f9fa;
}

.error {
  border: 1px solid red;
}

.isca {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #868e96;
}

.botaoSubmitCad {
  background: #59323f;
  margin-right: 2%;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  width: 90%;
  height: 39px;
  color: #f8f9fa;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.7925px;
  line-height: 21px;
  color: #ffffff;
  margin-top: 2px;
  margin-bottom: 20px;
}

.divTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25%;
  margin-bottom: 12%;
  padding-top: 15%;
}

.tituloCad {
  color: #ff577f;
  font-size: 24px;
  width: 130px;
  height: 35px;
  margin: 0px;
}

.botaoVoltarCad {
  width: 80px;
  height: 32px;
  background: #212529;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 23px;
  color: #f8f9fa;
  border: #212529;
}

@media (min-width: 768px) {
    background-color: black;
    padding: 1%;

  .divTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9%;
    margin-bottom: 2%;
    padding-top: 1%;
  }

  .formCadastro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 20%;
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
  }
}

`;
