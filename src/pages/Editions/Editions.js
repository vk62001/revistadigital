import React from 'react';
import './Editions.css';
import logo from '../../assets/images/Revista.png';

const Editions = () => {
    return (
        <div>
            <div className="containe mx-auto">
            <div className="ml-80 mt-6">
            <h3 className="mb-1 font-sans text-3xl text-blue-800 font-bold " >Ediciones</h3>
            </div>
           <br/>
           
           <h4 className="text-center text-blue-700 font-semibold"> #1 SEP-FEB 2021</h4>
           <img className="w-60 phone:hidden tablet:hidden desktop:block laptop:block  ml-72" src={logo}/>
             <div className="absolute inset-x-32 top-32 inset-y-0 right">
             <h5 className=" text-center text-gray-500 font-sans font-semibold text-2xl ">La digitalización  <br/>en la educación</h5>
             <br/>
             <div className="text-center">
             <h12 className=" font-sans font-semibold text-green-500">TECCOMITANCILLO</h12>
             </div>
             <div className="text-gray-600">
             <p className="text-center">El cambio del aprendizaje de <br/>manera presencial a la era digital<br/>
              ha generado y propiciado un grado
            <br/>de responsabilidad y compromiso<br/>de todos...</p>

            </div>
            </div>
            </div>
            
               
           
        </div>
    )
};

export default Editions;
