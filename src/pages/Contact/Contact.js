import React from 'react';
import './Contact.css';
import sep from '../../assets/images/sep.png';
import NavBar from '../../components/Navbar';

const Contact = () => {
    return (
        <div>
                 <NavBar 
                    white={false}
                 />
                
                
                <div className="absolute top-0 right-0 mt-5 mr-5">
                <img className="w-40
                                phone:hidden
                                tablet:hidden tablet:w-1/4 tablet:fixed tablet:left-6
                                laptop:block laptop:w-1/8 laptop:fixed laptop:right-6
                                desktop: block desktop:w-1/6 desktop:fixed desktop:right-0" src={sep} alt="sep"/>
                </div>
                        <div className="flex items-center w-full max-w-sm absolute top-80 right-24">
                            <form className="w-full py-20 px-5 bg-gray-100 absolute rounded-3xl shadow-2xl
                            laptop:block laptop:w-full laptop:right-2 laptop:my-2
                            desktop:block desktop:w-full desktop:right-16 desktop:my-8
                            tablet:block tablet:w-full tablet:-left-8 tablet:my-4
                            phone:block phone:w-11/12  phone:left-28">
                                <h2 className="text-3xl text-center mb-5 text-blue-900 font-sans font-bold uppercase">Contacto</h2>
                                <input className="w-full mt-5 p-2.5 border-none bg-white text-base outline-none focus:ring-2 focus:ring-blue-600" type="text" placeholder="Ingrese su nombre"/>
                                <input className="w-full mt-5 p-2.5 border-none bg-white text-base outline-none focus:ring-2 focus:ring-blue-600" type="email" placeholder="Ingrese su correo"/>
                                <input className="w-full mt-5 p-2.5 border-none bg-white text-base outline-none focus:ring-2 focus:ring-blue-600"type= "text" placeholder="Asunto"s/>
                                <input className="w-full mt-5 p-2.5 border-none bg-white text-base outline-none focus:ring-2 focus:ring-blue-600"type= "text" placeholder="Mensaje"/>
                                <button className="py-2.5  px-10 mt-10 border-none text-sm bg-blue-900 font-semibold cursor-pointer text-white outline-none hover:bg-blue-500" type="button">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    
                        <div className="absolute left-0 mt-32 ml-52
                        phone:block phone:w-1/2 phone:-bottom-56 phone:left-0 phone:ml-20
                        tablet:block tablet:w-1/2 tablet:-bottom-26 tablet:left-20 tablet:ml-20
                        laptop:block laptop:w-1/2 laptop:left-0 laptop:bottom-20
                        desktop:block desktop:w-1/2 desktop:left-20 desktop:my-0">
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
                        <i class="fab fa-facebook-square cursor-pointer text-3xl"></i> <i class="fab fa-twitter-square cursor-pointer text-3xl"></i> <i class="fab fa-instagram-square cursor-pointer text-3xl"></i> <i class="fab fa-whatsapp-square cursor-pointer text-3xl"></i>
                        </div>
                    </div>        
        </div>
    )
}

export default Contact;