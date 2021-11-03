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
      
        
      <div className=" h-full w-full">
      <img className="fixed w-auto h-auto" src={logo}/> 
      <div className=" static ml-96 mt-52 px-5 pt-11 inset-x-96 
      absolute w-3/12 p-16 text-white rounded-none border-black border-solid
      border-2 border-t-2 bg-black bg-opacity-50 ">       
        <div className="relative text-white text-lg mb-4 pb-2 h1">
        <h1 className="text-white font-sans font-bold cursor-default">Iniciar Sesion</h1>
        </div>
       
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Correo: </Form.Label>
            <div className="w-full h-10 mb-5 rounded text-black correo">
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
    <div className=" block m-auto  cursor-pointer text-white text-center hover:bg-blue-700 font-bold py-2 px-4 rounded bg-blue-900">
    <Button className="font-bold" variant="primary" type="submit" >
    Iniciar Sesion
  </Button>
  </div>
  
  <div className="block m-auto mt-5  cursor-pointer text-black text-center hover:bg-gray-300 font-bold py-2 px-4 rounded bg-gray-50 ">
  <Button  variant="primary" type= "submit" href="/formulario">
      Registrarme
  </Button>
  </div>

  
        </Form>
        
      </div>
      </div>
      
   </div>
    );
  }
