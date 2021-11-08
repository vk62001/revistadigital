import React from 'react';
import './Contact.css';
import sep from '../../assets/images/sep.png';

const Contact = () => {
    return (
        <div>
                
                <h2 className="pt-8 pr-30 text-blue-800 font-bold text-4xl text-center">Contacto</h2>

                <div className="absolute top-0 right-0 mt-5 mr-5">
                <img className="w-40
                                phone:hidden
                                tablet:block tablet:w-1/4 tablet:fixed tablet:left-6
                                laptop:block laptop:w-1/8 laptop:fixed laptop:right-6
                                desktop: block desktop:w-1/6 desktop:fixed desktop:right-0" src={sep} alt="sep"/>
                </div>
            <form class="w-full max-w-sm absolute right-0 mt-28 mr-52
                         phone:block phone:w-1/3 phone:left-26
                         tablet:block tablet:w-1/3 tablet:left-26
                         laptop:block laptop:w-1/4 laptop:right-0">
            <div className="w-full max-w-xs">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Nombre
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text phone:w-full" placeholder="Ingrese su nombre"></input>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Correo
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Ingrese su correo"></input>
                <p class="text-red-500 text-xs italic phone:hidden">Por favor ingrese su correo.</p>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Asunto
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type= "text" placeholder=""></input>
            </div>
            <div class="flex items-center">
                <div class="w-1/3"></div>
                <div class="w-2/3 phone:py-4 px-28">
                        <button class="shadow bg-green-400 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Enviar
                        </button>
                </div>
            </div>
            </div>
                
                
        </form>
                    <div className="absolute left-0 mt-32 ml-52
                    phone:block phone:w-1/2 phone:-bottom-full phone:left-0 phone:ml-20
                    tablet:block tablet:w-1/2 tablet:-bottom-2/4 tablet:left-24 tablet:ml-20
                    laptop:block laptop:w-1/2 laptop:left-0 laptop:bottom-20
                    desktop:block desktop:w-1/2 desktop:left-10 desktop:bottom-8">
                    <div className="icon-text">
                    <i className="fas fa-map-marker-alt"></i> <span>Carretera Ixtaltepec -Comitancillo Km. 7.5 <br/>
                    San Pedro Comitancillo</span>
                    </div>
                    <br/>
                    <br/>
                    <div className="icon-text">
                    <i className="far fa-envelope" aria-hidden="true"></i> <span>cc_comitancillo@tecnm.mx</span>
                    </div>
                    <br/>
                    <br/>
                    <div className="icon-text">
                    <i className="fas fa-mobile-alt"></i> <span>(01 971) 717 21 09 <br/> (01 971) 717 21 10</span>
                    <br/>
                    <br/>
                    <i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-instagram-square"></i> <i class="fab fa-whatsapp-square"></i>
                    </div>
                    </div>        
        </div>
    )
}

export default Contact;
