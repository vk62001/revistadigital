import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Fondo.png';
import NavBar from '../../components/Navbar';



const Login = () => {
      const [session, setSession] = useState(true);
      const [register, setRegister] = useState(false);
      const [password, setPassword] = useState(false);

      const recoveryPassword = () => {
        setSession(password?true:false);
        setPassword(!password)
      };
      const enterRegister = () =>{
        setSession(!session);
        setRegister(!register);
      };
      const enterSession = () => {};


    return (
      <div className="login">
        
        <NavBar 
          white={true}
        />
        <div className="container-form flex w-full h-screen">
          <div className="
                  w-1/2
                  phone:w-0
                "
          >
            
          </div>
          <div className="
            tablet:w-1/2
            phone:w-11/12 phone:m-auto
            "
          >
            {session &&
              <form className="py-10 px-5 bg-white  rounded-xl ">
                <h2 className="w-full text-xl text-center mb-2 -mt-5 text-blue-600 font-black">Iniciar Sesión</h2>
                <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Correo Electronico"/>
                <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="password" placeholder="Contraseña"/>
                <p 
                  className="mt-9"
                  onClick={recoveryPassword}
                >Olvidé mi contraseña</p>
                <button 
                  className="w-full py-2.5 px-10 mt-1 border-none text-sm bg-blue-600 cursor-pointer text-white outline-none rounded"
                  onClick={enterSession}
                >Entrar</button>
                <button 
                  className="w-full py-2.5 px-10 mt-10 border-none text-sm bg-gray-600 cursor-pointer text-white outline-none rounded"
                  onClick={enterRegister}  
                >Registrarse</button>
              </form>
            }
            {register &&
                <form className="py-10 px-5 bg-white  rounded-xl ">
                  <h2 className="w-full text-xl text-center mb-2 -mt-5 text-blue-600 font-black">Registrar</h2>
                  <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Correo Electronico"/>
                  <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="password" placeholder="Contraseña"/>
                  <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="password" placeholder="Repetir contraseña"/>
                  <button 
                    className="w-full py-2.5 px-10 mt-10 border-none text-sm bg-blue-600 cursor-pointer text-white outline-none rounded"

                  >Registrarse</button>
                  <button 
                    className="w-full py-2.5 px-10 mt-10 border-none text-sm bg-gray-600 cursor-pointer text-white outline-none rounded"
                    onClick = {enterRegister}
                  >Iniciar sesión</button>
              </form>
            }
            {password &&
                <form className="py-10 px-5 bg-white  rounded-xl ">
                <h2 className="w-full text-xl text-center mb-2 -mt-5 text-blue-600 font-black">Recuperar contraseña</h2>
                <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Correo Electronico"/>
                <button 
                  className="w-full py-2.5 px-10 mt-10 border-none text-sm bg-blue-600 cursor-pointer text-white outline-none rounded"

                >Enviar</button>
                <button 
                  className="w-full py-2.5 px-10 mt-10 border-none text-sm bg-gray-600 cursor-pointer text-white outline-none rounded"
                  onClick = {recoveryPassword}
                >Iniciar sesión</button>
                </form>
            }
          </div>
        </div>
      </div>
   
    );
  }

  export default Login;
