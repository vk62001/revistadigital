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
                  <img className=" animate-pulse  w-48 phone:hidden tablet:block laptop:block desktop:block"src={logo}/>
                 </div>
        
             
        <div className="absolute h-3/5 inset-y-7 left-48 bg-gray-100 p-16 rounded-xl justify-center shadow-2xl
        w-1/2
        laptop:block laptop:w-1/2 laptop:left-28 laptop:my-8
        desktop:block desktop:w-2/5 desktop:right-16 desktop:my-8
        tablet:block tablet:w-3/5 tablet:left-8 tablet:my-8
        phone:block phone:w-11/12 phone:p-8 phone:left-3 phone:mt-8">
        <h3 className="text-3xl font-sans font-bold uppercase text-blue-900 mb-10">Comentarios</h3>
        
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-bold text-blue-900" >Nombre</label>
            <input type="text" className="w-full border-gray-100
           rounded outline-none focus:ring-2 focus:ring-blue-600 py-1 p-2" placeholder="Ingrese su nombre"/>

        </div>

        <div>
            <label className="block mb-1 font-bold text-blue-900">Correo</label>
            <input type="email" className="w-full border-2 border-gray-100
            rounded outline-none focus:ring-2 focus:ring-blue-600 py-1 p-2 "placeholder="Ingrese su correo"/>
        </div>

        <div>
          <input className="w-full h-28 placeholder-gray-500 border-2 border-gray-100
          rounded outline-none focus:ring-2 focus:ring-blue-600 p-2" placeholder="Comentario"/>
        </div>

        <button className="py-2.5  px-10 mt-10 border-none text-sm bg-blue-900 font-semibold
         cursor-pointer text-white outline-none hover:bg-blue-500 w-full">Enviar</button>


        </form>
        

        </div>




        </div>
    )
};

export default Comments;