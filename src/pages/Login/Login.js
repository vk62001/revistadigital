import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';
import logo from '../../assets/images/Fondo.jpg';






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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Acepto terminos y condiciones" />
    </Form.Group>
    <div className="boton">
    <Button variant="primary" type="submit">
    Enviar
  </Button>
  
  <div className="boton2">
      <br/>
  <Button variant="primary" type= "submit">
      Registrarme
  </Button>
  </div>
</div>
  
        </Form>
        
      </div>
      
   </div>
    );
  }
