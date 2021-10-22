import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';
import logo from '../../assets/images/Fondo.jpg';
import { Link } from 'react-router-dom'






export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
    
    return (
      
      <div>
        <img src={logo}/> 
      
      <div className="container">
        
        <div className="h1">
        <h1>Iniciar Sesion</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Correo: </Form.Label>
            <div className="correo">
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
         </div>
          </Form.Group>
          <Form.Group size="sm" controlId="password">
            <Form.Label>Contraseña: </Form.Label>
            <div className="contraseña1">
            <Form.Control
             autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </Form.Group>
          <Link to="/Login">¿Olvide mi Contraseña?</Link>
    <div className="boton">
    <Button variant="primary" type="submit" >
    Enviar
  </Button>
  
  <div className="boton">
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
