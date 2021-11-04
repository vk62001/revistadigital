import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
                
                <div className="absolute w-5/12 m-auto box-border mt-8 rounded-lg">
                <div className="absolute w-5/12 ml-8 m-auto box-border mt-8  m-4 p-4 h-8">
                <h8 className="pl-32 text-blue-800 font-bold text-3xl" >Contacto</h8>
                
                <input className=" w-2/5 border-2 border-gray-700" type="text" name="nombre" placeholder="Nombre"></input>
                <input className=" mt-4 border-2 border-gray-700" type="email" name= "email" placeholder="Correo"></input>
                <input className="mt-4 border-2 border-gray-700" type= "text" name="asunto" placeholder="Asunto"></input>
                <div className="mt-4">
                <textarea type="text" name="mensaje" placeholder="Mensaje:"></textarea>
                </div>
                <br/>
                <button3 className="bg-blue-900 text-white text-center  text-base cursor-pointer">Enviar</button3>
                <div className="absolute mt-32">
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

                
        </div>
    )
};

export default Contact;
