import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
                
                <div className="Contenedor">
                <div className="Contacto">
                <h8>Contacto</h8>
                
                </div>
                <div className="inputs">
                <input type="text" name="nombre" placeholder="Nombre"></input>
                <input type="email" name= "email" placeholder="Correo"></input>
                <input type= "text" name="asunto" placeholder="Asunto"></input>
                <div className="Textarea">
                <textarea type="text" name="mensaje" placeholder="Mensaje:"></textarea>
                </div>
                <br/>
                <button3>Enviar</button3>
                </div>
                <div className="Contenedorr">
                    <div className="icon-text">
                    <i class="fas fa-map-marker-alt"></i> <span>Carretera Ixtaltepec -Comitancillo Km. 7.5 <br/>
                    San Pedro Comitancillo</span>
                    </div>
                    <br/>
                    <br/>
                    <div className="icon-text">
                    <i className="FaBeer" aria-hidden="true"></i> <span>cc_comitancillo@tecnm.mx</span>
                    </div>
                    <br/>
                    <br/>
                    <div className="icon-text">
                    <i class="" aria-hidden="true"></i> <span>(01 971) 717 21 09 <br/> (01 971) 717 21 10</span>
                    </div>
                    </div>
                    
                
                
                
                
                </div>

                
        </div>
    )
};

export default Contact;
