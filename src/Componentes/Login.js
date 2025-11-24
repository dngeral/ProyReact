import React, { useState } from 'react';

export const Login = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir modal</button>
      <div id='modalLogin' className='ModalLogin'>
        <form id='modal-content'>
          <h2>Iniciar Sesion</h2>
          <div>
            <label>Usuario</label>
            <input type='text' className='txtinput' placeholder='Ingrese usuario'></input>
          </div>

          <div>
            <label>Contrasena</label>
            <input type='password' className='txtinput' placeholder='Ingrese contrasena'></input>
          </div>

          <input className='btn btnenviar' value="Iniciar" type='submit' ></input>
          <span>No tienes cuenta? <a>Crear cuenta</a></span>
          <div className='optional-icons'>
            <label>Iniciar con:</label>
            <div className='icons'>
              <div><i class="fa-brands fa-google"></i></div>
              <div><i class="fa-brands fa-facebook"></i></div>
              <div><i class="fa-brands fa-x-twitter"></i></div>

              {/* <i class="fa-brands fa-google"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-x-twitter"></i> */} 

            </div>
          </div>
        </form>
      </div>
      
      <form>
        <h2>Iniciar Sesion</h2>
        <div>
          <label>Usuario</label>
          <input type='text' className='txtinput' placeholder='Ingrese usuario'></input>
        </div>

        <div>
          <label>Contrasena</label>
          <input type='password' className='txtinput' placeholder='Ingrese contrasena'></input>
        </div>

        <input className='btn btnenviar' value="Iniciar" type='submit' ></input>
        <span>No tienes cuenta? <a>Crear cuenta</a></span>
        <div className='optional-icons'>
          <label>Iniciar con:</label>
          <div className='icons'>
            <div><i class="fa-brands fa-google"></i></div>
            <div><i class="fa-brands fa-facebook"></i></div>
            <div><i class="fa-brands fa-x-twitter"></i></div>

            {/* <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i> */} 

          </div>
        </div>
      </form>
    </div>
  )
}
