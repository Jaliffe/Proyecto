import { useState } from "react";
import logotipo from "./assets/Logotipo.png";
import "./Estilos/Recuperar.css";

const Recuperar =  () =>  {
    const [correo, SetCorreo] = useState ("");
    const [Password, setPassword] =useState ("");

    const onIngresar=()=>{{
     alert("Correo: "+correo);
     alert("Password: "+Password);
    }}

 return (
    <div className="contenedor">

        <div className="titulo">Enseña.Me LSM</div>

        <div>
            <img src={logotipo} className="Logotipo"/>
        </div>

        <div className="Agrupador-Correo">
            <div> Correo Electronico</div>
            <div>
                <input 
                type="text"
                placeholder="Ingresaz tu Correo Electronico"
                className="Caja-Correo"
                value={correo}
                onChange={(e)=> SetCorreo(e.target.value)}/> 
            </div>
    </div>
    
    <div className="Agrupador-Password">
        <div> Contraseña  </div> 
        <div>
            <input 
            type="Password" 
            placeholder="Password"
            className="caja-Password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
    </div>

    <div className="Agrupador-Boton">
        <button className="boton-ingresar" onClick={()=>onIngresar()}>ingresar</button>
    </div>
    
    <div className="otro-botones">
        <a href="/registro" className="link-registro">Registrarse</a>
        <a href="/Recuperar-Password" className="link-password">Olvide mi contraseña</a>
    </div>
</div>

 )
 }

    export default Recuperar