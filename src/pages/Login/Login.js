import React, { Fragment, useState } from 'react';
import './Login.css';




const Login = () =>{
  return (

  
  <Fragment>
        <h1>Iniciar Sesion</h1>
        <form className="row">
            <div className="col-md-3">
            <input
            placeholder="Ingrese su Correo"
            className="form-control"
            ></input>
            </div>
            <div className="col-md-3">
            <input type="password"
            placeholder="Ingrese su contraseña"
            className="form-control"
            ></input>

            </div>
            <div className="col-md-3">
            <input/>
            </div>
            <div className="col-md-3">
            <button className="btn btn-primary">Enviar</button>
            </div>
            
            
        </form>

        </Fragment>
        
    );
}

export default Login;
