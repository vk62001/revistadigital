import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Formulario.css';
import logo from '../../assets/images/Revista.png';






export default function Formulario() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Apellido, setApellido] = useState("");
    const [nombre, setNombre] = useState("");
  
   // function validateForm() {
     // return email.length > 0 && password.length > 0;
    //}
  
    function handleSubmit(event) {
      event.preventDefault();
    }
    
    return (
      
      <React.Fragment>
          <div className="logo">
          <img src={logo}/>
              </div>
      <div className="contenedor">
            
        
        <div className="h1">
        <h1>Crear Cuenta</h1>
        </div>
        <Form onSubmit={handleSubmit}>
        <Form.Label>Nombre</Form.Label>
         <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          <Form.Group controlId="email">
            <Form.Label>Apellido: </Form.Label>
            <Form.Control
              type="text"
              value={Apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
         <Form.Label>Correo</Form.Label>
         <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
    Registrar
  </Button>

</div>
  
        </Form>
        
      </div>
      
      </React.Fragment>
    );
  }
