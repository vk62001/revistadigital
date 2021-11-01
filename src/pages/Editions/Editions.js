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
           <h4 className="text-center text-blue-700"> #1 SEP-FEB 2021</h4>
           <img className="w-60  ml-80" src={logo}/>
             <div className="t">
             <h5 className="text-center ">La digitalizacion  <br/>en la educación</h5>
             <br/>
             <div className="text-center">
             <h12 className="">TECCOMITANCILLO</h12>
             </div>
             <div className="text-center">
             <p>El cambio del aprendizaje de <br/>manera presencial a la era digital<br/>
              ha generado y propiciado un grado
            <br/>de responsabilidad y compromiso<br/>de todos...</p>

            </div>
            </div>
            </div>
            
               
           
        </div>
    )
};

export default Editions;
