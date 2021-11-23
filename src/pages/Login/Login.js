import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Fondo.png';
import NavBar from '../../components/Navbar';



const Login = () => {
    
    return (
      <div>
        
        <img className="absolute w-full h-full" src={logo}/>
        <NavBar />
        <div className="font-serif">
          <div className="w-full max-w-4xl m-auto relative mt-32" >
            <div className="w-full py-2.5 px-5 flex justify-center backdrop-filter-blur bg-blue-600">
              <div className="my-24 mx-10 mt-7 text-white transition delay-500">
                <h3 className="mt-7 font-normal text-base">¿Ya tienes una cuenta?</h3>
                <p className="mt-7 text-base font-light">Inicia sesión para entrar a la página</p>
                <button className="mt-7 py-2.5 px-10 border-2 border-white text-sm bg-transparent font-semibold cursor-pointer bg-blue outline-none transition delay-300 hover:bg-white hover:text-blue-500">Iniciar sesión</button>
              </div>
               <div className="my-24 mx-10 mt-7 text-white transition delay-500">
                  <h3 className="mt-7 font-normal text-base">¿Aun no tienes una cuenta?</h3>
                  <p className="mt-7 text-base font-light">Regístrate para que puedas iniciar sesión</p>
                  <button className="mt-7 py-2.5 px-10 border-2 border-white text-sm bg-transparent font-semibold cursor-pointer outline-none transition delay-300 hover:bg-white hover:text-blue-500">Regístrarse</button>
                </div>
            </div>
          </div>

        <div className="flex items-center w-full max-w-sm relative -top-40 left-64 opacity-100 block">
          <form className="w-full py-10 px-5 bg-white absolute rounded-3xl">
            <h2 className="text-3xl text-center mb-2 -mt-5 text-blue-600 font-black">Inciar Sesión</h2>
            <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Correo Electronico"/>
            <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="password" placeholder="Contraseña"/>
            <button className="py-2.5 px-10 mt-10 border-none text-sm bg-blue-600 cursor-pointer text-white outline-none">Entrar</button>
          </form>

          <form className="w-full py-10 px-5 bg-white absolute rounded-3xl hidden">
            <h2 className="text-3xl text-center mb-2 -mt-5 text-blue-600 font-black">Regístrarse</h2>
            <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Nombre completo"/>
            <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Correo Electronico"/>
            <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="text" placeholder="Usuario"/>
            <input className="w-full mt-5 p-2.5 border-none bg-gray-200 text-base outline-none" type="password" placeholder="Contraseña"/>
            <button className="py-2.5 px-10 mt-10 border-none text-sm bg-blue-600 cursor-pointer text-white outline-none">Regístrarse</button>
          </form>
        </div>
        </div>
      </div>
   
    );
  }

  export default Login;
