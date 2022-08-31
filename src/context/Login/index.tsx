import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import React, {createContext} from "react";



interface LoginProviderProps{
  children: ReactNode
}

export interface OnSubmitLoginProps{
email:string
password: string
}
 
interface ILoginContext{
  onSubmitLogin: (dados: OnSubmitLoginProps) => void
}
export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

export const LoginProvider = ({ children }:LoginProviderProps) => {
 
  const navigate = useNavigate();
  
  const onSubmitLogin = (dados:OnSubmitLoginProps) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", dados)
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("@TOKEN", JSON.stringify(token));
        localStorage.setItem("@UserId", JSON.stringify(user.id));
        toast.success("Sucesso!!!");
        navigate("/isLoged");
      })
      .catch((err) => toast.error("Email ou senha incorretos"));
  }; 
  return <LoginContext.Provider value={{ onSubmitLogin }}>{children}</LoginContext.Provider>;
};
