import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
                
                
                <form>
                <h8>Contacto</h8>
                <input type="text" name="nombre" placeholder="Nombre"></input>
                <input type="email" name= "email" placeholder="Correo"></input>
                <input type= "text" name="asunto" placeholder="Asunto"></input>
                <textarea type="text" name="mensaje" placeholder="Mensaje"></textarea>
                <br/>
                <button3>Enviar</button3>
                </form>


                
        </div>
    )
};

export default Contact;
