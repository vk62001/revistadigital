import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';




 

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
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Correo: </Form.Label>
            <div className="correo">
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
         </div>
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Contraseña: </Form.Label>
            <div className="contraseña1">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </Form.Group>
          <div className="boton">
          <Button onClick={!validateForm()}>
            iniciar sesion</Button>
          
          </div>
        </Form>
      </div>
      
    );
  }
