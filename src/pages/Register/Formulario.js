import React, { useState } from 'react';
import './Formulario.css';
import revista from '../../assets/images/Revista.png';






const Formulario = () => {
    
  return (
    
    
    <div className=" Formulario min-h-screen flex items-center
    justify-center bg-white">
      <div className=" absolute inset-y-44 left-24
      laptop:block laptop:w-1/3 laptop:left-28 laptop:my-2
      desktop:block desktop:w-2/5 desktop:left-24 desktop:p-8
      tablet:block tablet:w-1/3 tablet:left-16 tablet:my-20
      phone:block phone:w-1/4 phone:left-6 phone:my-28">
      <img className="w-full" src={revista}/>
      </div>
      <div className=" absolute inset-y-20 right-16 p-16 bg-gray-100 absolute rounded-3xl shadow-2xl w-1/3
      laptop:block laptop:w-2/5 laptop:right-8 laptop:my-2
      desktop:block desktop:w-1/3 desktop:right-16 desktop:my-8
      tablet:block tablet:w-1/2 tablet:right-8 tablet:my-4
      phone:block phone:w-auto phone:p-8 phone:right-0">
        
      <h1 className="text-3xl font-bold mb-10 text-blue-900">Crear Una Cuenta</h1>

      <form className="space-y-5">

       <div className="mb-3">
         <label className="block mb-2 font-bold text-blue-900">Nombre</label>
         <input type="text" className="w-full border-2 
         border-gray-400 py-1 px-1 rounded outline-none focus:border-blue-400"placeholder="Ingrese su nombre"/>
       </div>

       <div>
       <label className="block mb-2 font-bold text-blue-900">Apellido</label>
         <input type="text" className="w-full border-2 
         border-gray-400 py-1 px-1 rounded outline-none focus:border-blue-400"placeholder="Ingrese su apellido"/>
       </div>

       <div>
       <label className="block mb-1 font-bold text-blue-900">Correo</label>
         <input type="email" className="w-full border-2 
         border-gray-400 py-1 px-1 rounded outline-none focus:border-blue-400"placeholder="Ingrese su correo"/>
       </div>

       <div>
       <label className="block mb-1 font-bold text-blue-900">Contraseña</label>
         <input type="password" className="w-full border-2 
         border-gray-400 py-1 px-4 rounded outline-none focus:border-blue-400"placeholder="Ingrese su contraseña"/>
       </div>

       <div className="flex items-center">
         <input type="checkbox"/>
         <label className="ml-2 text-blue-900 text-sm">Estoy de acuerdo con terminos y condiciones</label>
         
       </div>
       
       <button className="block w-full bg-blue-900 hover:bg-blue-500 p-4 rounded text-white">Registrarme</button>
      </form>
       


      </div>
      
   
    
    
   
   </div>
   
  );
}

export default Formulario;