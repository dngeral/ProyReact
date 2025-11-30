import React from 'react'
import {Link} from "react-router-dom";

 const Registro = () => {
  return (
    <div className='formularios'>
      <form>
        <h2>Registro</h2>
        
        <div>
            <label>Nombre</label>
            <input type='text' className='name txtinput' placeholder='Ingrese usuario'></input>
          </div>
        
        <div>
          <label>Correo Email</label>
          <input type='email' className='txtinput' placeholder='Ingrese su correo'></input>
        </div>

        <div>
          <label>Contrasena</label>
          <input type='password' className='txtinput' placeholder='Ingrese contrasena'></input>
        </div>
        <div>
          <label>Vuelva a ingresar la contrasena</label>
          <input type='password' className='txtinput' placeholder='Ingrese contrasena'></input>
        </div>

        {/* <input className='btn btnCrear' value="Crear mi cuenta" type='submit' ></input> */}
        <Link to="/log" className='btn '>Crear mi cuenta</Link>
        <span>Ya tienes cuenta?  <Link to="/log" className='enlace '>Inicia sesion</Link></span>
      </form>
    </div>
  )
}
export default Registro;
