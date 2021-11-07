import React, { useState } from 'react';
import './Formulario.css';
import revista from '../../assets/images/Revista.png';






const Formulario = () => {
    
  return (
    
    
    <div className=" Formulario min-h-screen flex items-center
    justify-center bg-white">
      <div className=" absolute inset-y-44 left-24">
      <img className="w-full" src={revista}/>
      </div>
      <div className=" absolute inset-y-20 right-16 bg-white p-16 rounded shadow-2x1 w-1/3">
        
      <h1 className="text-3xl font-bold mb-10 text-blue-900">Crear Una Cuenta</h1>

      <form className="space-y-5">

       <div className="mb-3">
         <label className="block mb-2 font-bold text-blue-900">Nombre</label>
         <input type="text" className="w-full border-2 
         border-gray-400 py-1 px-4 rounded outline-none focus:border-blue-400"/>
       </div>

       <div>
       <label className="block mb-2 font-bold text-blue-900">Apellido</label>
         <input type="text" className="w-full border-2 
         border-gray-400 py-1 px-4 rounded outline-none focus:border-blue-400"/>
       </div>

       <div>
       <label className="block mb-1 font-bold text-blue-900">Correo</label>
         <input type="email" className="w-full border-2 
         border-gray-400 py-1 px-4 rounded outline-none focus:border-blue-400"/>
       </div>

       <div>
       <label className="block mb-1 font-bold text-blue-900">Contraseña</label>
         <input type="password" className="w-full border-2 
         border-gray-400 py-1 px-4 rounded outline-none focus:border-blue-400"/>
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