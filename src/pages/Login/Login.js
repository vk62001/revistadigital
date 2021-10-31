import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';
import logo from '../../assets/images/Fondo.jpg';
import { Link } from 'react-router-dom'






export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    function handleSubmit(event) {
      event.preventDefault();
    }
    
    return (
      
      <div>
         <img className="bg-no-repeat" src={logo}/> 
        
      
      <div className=" absolute w-3/12 p-16 text-white rounded-none border-black border border-solid container">
        
        <div className="relative text-lg mb-4 pb-2 h1">
        <h1>Iniciar Sesion</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Correo: </Form.Label>
            <div className="w-full h-10 mb-5 rounded correo">
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
         </div>
          </Form.Group>
          <Form.Group size="sm" controlId="password">
            <Form.Label>Contraseña: </Form.Label>
            <div className="block w-full h-10 mb-5 rounded text-black contraseña">
            <Form.Control
             autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </Form.Group>
          <Link to="/Login">¿Olvide mi Contraseña?</Link>
    <div className=" block m-auto h-12 cursor-pointer text-black text-center boton ">
    <Button variant="primary" type="submit" >
    Enviar
  </Button>
  
  <div className="boton2 block m-auto w-6/12 h-10 cursor-pointer text-black text-center left-0 bottom-0">
      <br/>
  <Button variant="primary" type= "submit" href="/formulario">
      Registrarme
  </Button>
  </div>
</div>
  
        </Form>
        
      </div>
      
   </div>
    );
  }
