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
                    <h9> <i class="fa fa-map-marker" aria-hidden="true"></i> Carretera Ixtaltepec -Comitancillo Km. 7.5 <br/>
                    San Pedro Comitancillo</h9>
                    <br/>
                    <br/>
                    <h10> cc_comitancillo@tecnm.mx</h10>
                    <br/>
                    <br/>
                    <h11> (01 971) 717 21 09 <br/> (01 971) 717 21 10</h11>
                    </div>
                    <div className="icon-text">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                
                
                
                
                </div>

                
        </div>
    )
};

export default Contact;
