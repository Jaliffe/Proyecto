import { useState } from "react";
import logotipo from "./assets/Logotipo.png";
import "./assets/Estilos/Acceso.css";
import { useNavigate } from "react-router-dom";

const Acceso =  () =>  {
    const nav = useNavigate();
    const [correo, SetCorreo] = useState ("");
    const [password, setPassword] =useState ("");

    const onIngresar = async () => {{
    const url = "http://localhost:4000/usuarios/validar";
    const resp = await fetch(url, {
        method : "post",
        headers : {
            "Content.Type" : "application/json"
        },
        body : JSON.stringify({
            Correo : correo,
            Password : password //
        })
    });
    if(resp.ok){
        nav("/categorias");
    }
    else{
        const error = await resp.text();
        alert (error);
    }
}}
}
