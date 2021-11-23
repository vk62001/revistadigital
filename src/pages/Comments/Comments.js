import React from 'react';
import './Comments.css';
import logo from '../../assets/images/logo.png';
import NavBar from '../../components/Navbar';

const Comments = () => {
    return (
      
        <div> 
          <NavBar 
                    white={false}
                 />
         
        
        <div className="absolute top-0 right-0 mr-20 mt-14 logoC
       tablet:block tablet:w-1/4 tablet:right-1 tablet:pl-8">
                  <img className=" w-48 phone:hidden tablet:block laptop:block desktop:block"src={logo}/>
                 </div>
        
             
        <div className="absolute inset-y-7 left-48 bg-white p-16 rounded justify-center
        w-1/2
        laptop:block laptop:w-1/2 laptop:left-32 laptop:my-2
        desktop:block desktop:w-2/5 desktop:right-16 desktop:my-8
        tablet:block tablet:w-3/5 tablet:left-8 tablet:my-4
        phone:block phone:w-full phone:p-8 phone:left-2">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Comentarios</h3>
        
        <form className="space-y-5">
          <div>
        <label className="block mb-1 font-bold text-blue-900" >Nombre</label>
        <input type="text" className="w-full border-2 border-gray-400
        rounded outline-none focus:ring-2 focus:ring-blue-600 py-1" placeholder="Ingrese su nombre"/>

        </div>

        <div>
        <label className="block mb-1 font-bold text-blue-900">Correo</label>
        <input type="email" className="w-full border-2 border-gray-400
        rounded outline-none focus:ring-2 focus:ring-blue-600 py-1 "placeholder="Ingrese su correo"/>
        </div>

        <div>
        <input className="w-full h-28 placeholder-gray-500 border-2 border-gray-400
        rounded outline-none focus:ring-2 focus:ring-blue-600 py-1 px-4" placeholder="Comentario"/>
        </div>

        <button className="block w-full bg-blue-900 p-4 rounded 
        hover:bg-blue-500 font-bold text-white">Enviar</button>


        </form>
        

        </div>




        </div>
    )
};

export default Comments;