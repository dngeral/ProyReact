import React from 'react'

export const Register = () => {
  return (
    <div>
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
        <button className='btn btnCrear'>Crear mi cuenta</button>
        <span>Ya tienes cuenta? <a>Inicia sesion</a></span>
      </form>
    </div>
  )
}
