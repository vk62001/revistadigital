import React from 'react';
import './Editions.css';
import logo from '../../assets/images/Revista.png';

const Editions = () => {
    return (
        <div>
            <h3 >Ediciones</h3>
           <br/>
           <h4> #1 SEP-FEB 2021</h4>
           <div className="logorevista">
          <img src={logo}/>
             </div>
            
             <h5>La digitalizacion  <br/>en la educación</h5>
             <br/>
             <h6>TECCOMITANCILLO</h6>
             <p>El cambio del aprendizaje de <br/>manera presencial a la era digital<br/>
              ha generado y propiciado un grado
            <br/>de responsabilidad y compromiso<br/>de todos...</p>
               
           
        </div>
    )
};

export default Editions;
