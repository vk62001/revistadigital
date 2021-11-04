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
      <div className="absolute static ml-96 mt-28 px-5 pt-11 inset-x-96 w-3/12 p-4 rounded-none 
      border-black border-solid border-2 border-t-2">

        <div className="relative text-blue-800 text-lg mb-4 pb-2">
        <h1 className="text-blue-800 font-bold">Crear una Cuenta</h1>
        </div>
        
        <Form onSubmit={handleSubmit}>
        <Form.Label className="text-blue-800">Nombre:</Form.Label>
        
         <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              
            />
            
          <Form.Group controlId="email">
            <Form.Label className="text-blue-800" >Apellido: </Form.Label>
            <Form.Control
              type="text"
              value={Apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
         <Form.Label className="text-blue-800" >Correo:</Form.Label>
         <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group size="sm" controlId="password">
            <Form.Label className="text-blue-800" >Contraseña: </Form.Label>
            <div className="contraseña1">
            <Form.Control
             autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </Form.Group>
          <div className="">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Acepto terminos y condiciones" />
    </Form.Group>
    </div>
    <div className="m-auto mt-5  cursor-pointer text-white text-center hover:bg-green-500 font-bold py-2 px-4 rounded bg-green-800">
    <Button className="font-bold" variant="primary" type="submit">
    Registrar
  </Button>

</div>
  
        </Form>
        
      </div>
      
      </React.Fragment>
    );
  }
