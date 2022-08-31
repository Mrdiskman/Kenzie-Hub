
import * as yup from "yup";

export const formSchema = yup.object().shape({
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
        /([0-9]{2,3})?(([0-9]{2}))([0-9]{4,5})([0-9]{4})/,
        "Telefone invalido"
      ),
  });