import React, { useState } from 'react';
import {Link} from "react-router-dom";
const Login = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='formularios'>


      <form className='formg'>
        <h2>Iniciar Sesion</h2>
        <div>
          <label>Usuario</label>
          <input type='text' className='txtinput' placeholder='Ingrese usuario'></input>
        </div>

        <div>
          <label>Contrasena</label>
          <input type='password' className='txtinput' placeholder='Ingrese contrasena'></input>
        </div>
        <Link to="/p" className='btng '>Iniciar</Link>
        <span>Ya tienes cuenta?  <Link to="/registro" className='enlace '>Crear cuenta</Link></span>
        
        <div className='optional-icons'>
          <label>Iniciar con:</label>
          <div className='icons'>
            {/* <div><i class="fa-brands fa-google"></i></div>
            <div><i class="fa-brands fa-facebook"></i></div>
            <div><i class="fa-brands fa-x-twitter"></i></div> */}

            <a><i class="fa-brands fa-google"></i></a>
            <a><i class="fa-brands fa-facebook"></i></a>
            <a><i class="fa-brands fa-x-twitter"></i></a>

          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;