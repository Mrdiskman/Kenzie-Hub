import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ReactNode } from "react";
import React, {createContext} from "react";

interface RegisterProviderProps{
  children: ReactNode
}

export interface OnSubmitRegisterProps{
  name:string
  email:string
  password: string
  passwordAuthentication:string
  bio:string
  contact:string
  course_module:string
  }

  interface IRegisterContextProps{
    onSubmitFunction: (data: OnSubmitRegisterProps) => void
  }

export const RegisterContext = createContext<IRegisterContextProps>({} as IRegisterContextProps);

export const RegisterProvider = ({ children }:RegisterProviderProps) => {
    
  const navigate = useNavigate()
  
  const onSubmitFunction = (dados:OnSubmitRegisterProps) => {
    const { passwordAuthentication, ...rest } = dados;
    axios
      .post("https://kenziehub.herokuapp.com/users", rest)
      .then((res) => {
        toast.success(`Cadastro realizado com sucesso!!!`);
        navigate("/");
      })
      .catch((err) => toast.error(`Ops, algo deu errado!!!`));
      }

    return(
        <RegisterContext.Provider value={{onSubmitFunction}}>{children}</RegisterContext.Provider>
    )
}