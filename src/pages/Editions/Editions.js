import React from 'react';
import './Editions.css';
import logo from '../../assets/images/Revista.png';
import NavBar from '../../components/Navbar';

const Editions = () => {
    return (
        <div>
          
                 <NavBar 
                    white={false}
                 />
           <div ClassName="Contenedor">
               <div ClassName="">
               <h1 className="mb-1 font-sans text-3xl font-bold text-blue-900 text-center">Ediciones</h1>
               <p className="mb-1 mt-10 font-sans text-4x2 font-bold text-blue-600 text-center">#1 SEP-FEB 2022</p>
               <p className=" font-sans mt-4 text-center text-gray-600 text-2xl ">
                
                 La digitalizacion <br/> 
                  en la educacion
                </p>

                <p className=" text-center text-green-500 font-semibold">TECCOMITANCILLO</p>
                <p className=" mt-6 text-center text-gray-500 ">
                El cambio del aprendizaje de <br/> manera presencial a la era digital <br/> ha generado y propiciado un grado <br/> de responsabilidad y compromiso<br/> de todos...
             </p>
             <img className=" left-24  desktop:block laptop:block ml-72
              laptop:block laptop:w-1/4 laptop:mx-20 laptop:-my-60
              desktop:block desktop:w-1/6 desktop:mx-72 desktop:-my-60
              tablet:block tablet:w-1/4 tablet:mx-8 tablet:-my-60
              phone:block phone:w-1/2 phone:mx-20 phone:my-4" src={logo}/>
               </div>








           </div>
            </div>
            
               
           
       
    )
};

export default Editions;
