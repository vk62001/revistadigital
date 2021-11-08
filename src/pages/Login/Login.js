import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/images/Fondo.png';




const Login = () => {
    
    return (
      
      <div className="w-full h-full flex items-center
      justify-center ">
       
        
     
      
      
     
     <div className=" absolute inset-y-20  bg-black bg-opacity-50 p-16 my-10 
     rounded shadow-2xl w-1/3 h-2/3 
     laptop:block laptop:w-2/5 laptop:right-20 laptop:my-2
     desktop:block desktop:w-1/3 desktop:right-16 desktop:my-8
     tablet:block tablet:w-1/2 tablet:right-8 tablet:my-4
     phone:block phone:w-10/12 phone:py-8" >
       <h3 className="text-2xl font-bold mb-10 text-white">Iniciar Sesion</h3>
      
        <form className="space-y-4">

         <div className="mb-2">

           <label className="block mb-1 font-bold text-white"for="nombre">Correo:</label>
           <input type="email" className="w-full border
           border-gray-400 p-1 rounded outline-none
           
           focus:border-blue-500"id="name"/>
           </div>

           <div>
           <label className="block mb-1 font-bold text-white"for="nombre">Contraseña:</label>
           <input type="password" className="w-full border
           border-gray-400 p-1 rounded outline-none
           focus:border-blue-500"id="name"/>
           </div>

           <div>
           <label className="text-white cursor-pointer">¿Olvide Mi Contraseña?</label>
           </div>

           <button className="block w-full bg-blue-900 hover:bg-blue-500 p-4 rounded text-white
           transition duration-300">Iniciar Sesion</button>
           <button className="block w-full bg-white hover:bg-gray-500 p-4 rounded text-black font-semibold
           transition duration-300" href="/formulario">Registrarme</button>
        </form>


     </div>
      </div>
   
    );
  }

  export default Login;
