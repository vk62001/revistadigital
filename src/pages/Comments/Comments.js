import React from 'react';
import './Comments.css';
import logo from '../../assets/images/logo.png';

const Comments = () => {
    return (
        <div> 
             <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-0 phone:w-full cursor-pointer">
                <p className="desktop:hidden laptop:hidden tablet:hidden phone:block text-white
                 flex">
                      </p>
                    <div  className=" block px-2 py-4">
                        <i className="fas fa-bars text-blue-900" id="mobile-menu"></i>
                    </div>
                 <div className="absolute top-0 right-0 mr-20 mt-4 logoC">
                  <img className=" w-48 phone:hidden tablet:block laptop:hidden desktop:block"src={logo}/>
                 </div>
                <div className="absolute w-5/12 m-auto box-border mt-8 rounded-lg">
                <div className="pl-32 text-blue-800 font-bold text-3xl">
                <h8>Comentarios:</h8>
             
                </div>
                <div className="border-black  border-solid m-4 p-4 h-8">
                <input className="border-2 border-gray-700" type="text" name="nombre" placeholder="Ingrese su nombre"></input>
                <input className="mt-4 border-2 border-gray-700" type="email" name= "email" placeholder="Ingrese su correo"></input>
                <div className="mt-4 ">
                <textarea  type="text" name="Comentario" placeholder="Comentarios:"></textarea>
                </div>
                <br/>
                <button3 className="bg-blue-900 hover:bg-blue-700 text-white text-center no-underline text-base cursor-pointer">Enviar</button3>
                </div>
                
                    
                
                
                
                
                </div>

                </div>
        </div>
    )
};

export default Comments;