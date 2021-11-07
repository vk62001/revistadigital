import React from 'react';
import './Comments.css';
import logo from '../../assets/images/logo.png';

const Comments = () => {
    return (
        <div className="min-h-screen flex items-center 
        justify-center"> 
        <div className="absolute top-0 right-0 mr-20 mt-4 logoC">
                  <img className=" w-48 phone:hidden tablet:block laptop:block desktop:block"src={logo}/>
                 </div>
        
             
        <div className="absolute inset-y-7 left-48 bg-white p-16 rounded justify-center
        w-1/2">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Comentarios</h3>
        
        <form className="space-y-5">
          <div>
        <label className="block mb-1 font-bold text-blue-900">Nombre</label>
        <input type="text" className="w-full border-2 border-gray-400
        rounded outline-none focus:border-blue-400 py-1"/>

        </div>

        <div>
        <label className="block mb-1 font-bold text-blue-900">Correo</label>
        <input type="email" className="w-full border-2 border-gray-400
        rounded outline-none focus:border-blue-400 py-1"/>
        </div>

        <div>
        <input className="w-full h-28 placeholder-gray-500 border-2 border-gray-400
        rounded outline-none focus:border-blue-400 py-1 px-4" placeholder="Comentario"/>
        </div>

        <button className="block w-full bg-blue-900 p-4 rounded 
        hover:bg-blue-500 font-bold text-white">Enviar</button>


        </form>
        

        </div>




        </div>
    )
};

export default Comments;