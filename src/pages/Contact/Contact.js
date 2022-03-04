import React, { useState } from 'react';
import './Contact.css';
import sep from '../../assets/images/sep.png';
import NavBar from '../../components/Navbar';
import axios from 'axios';

const Contact = () => {
      
    const [nombre,setNombre] = useState('');
    const [correo,setCorreo] = useState('');
    const [mensaje,setMensaje] = useState('');
    const [archivo, setArchivo] = useState('');

    const fileSelectHandler = (e) =>{
        console.log(e.target.files)
        setArchivo({
            nombre: e.target.files[0],
            correo: e.target.files[0],
            mensaje: e.target.files[0]
        })
    }

    const handleChange = e =>{
        console.log(setNombre)
        setNombre(e.target.value)
    }

    const handleInputChange = e =>{
        setCorreo(e.target.value)

    }

    const onInputChange = e => {
        setMensaje(e.target.value)
    }
    
    const onSubmit = e => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('nombre',nombre);
        fd.append('correo',correo);
        fd.append('mensaje',mensaje);

         axios.post("http://localhost:8000/api/send",fd,{
            onUploadProgress: progressEvent => {
                console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ "%");
              }
         })

    }



    return (
        <div>
                 <NavBar 
                    white={false}
                 />
                <div className="
                                p-10
                                phone:flex-none phone:p-4
                                tablet:flex
                                laptop:flex
                                desktop:flex
                ">
                    <div className="
                        contácto 
                        phone:w-full phone:flex-none phone:absolute phone:bottom-0 phone:justify-start phone:text-xs
                        tablet:relative tablet:w-1/2 tablet:flex tablet:justify-center tablet:items-center
                        laptop:relative laptop:w-1/2 laptop:flex laptop:justify-center laptop:items-center
                        desktop:relative desktop:w-1/2 desktop:flex desktop:justify-center desktop:items-center
                        "
                    >
                        <div className="float-left">
                            <div className="icon-text mb-1 flex justify-center items-center text-blue-700">
                                 <i className="fas fa-map-marker-alt p-2"></i>
                                 <div className="">
                                    <p> Carretera Ixtaltepec -Comitancillo Km. 7.5</p> 
                                    <p> San Pedro Comitancillo</p>
                                 </div>
                                
                            </div>
                            <div className="icon-text mb-1 text-blue-700">
                                <span><i className="far fa-envelope p-1" aria-hidden="true"></i> <a href="mailto:cc_comitancillo@tecnm.mx">cc_comitancillo@tecnm.mx</a></span>
                            </div>
                            <div className="icon-text mb-1 flex justify-start items-center text-blue-700">
                                 <i className="fas fa-mobile-alt p-2"></i>
                                 <div className="">
                                    <p>(01 971) 717 21 09 </p>
                                    <p>(01 971) 717 21 10</p>
                                 </div>
                                
                            </div>
                            <div className="icon-text mb-1 text-blue-700">
                                <i class="fab fa-facebook-square cursor-pointer text-3xl"></i> <i class="fab fa-twitter-square cursor-pointer text-3xl"></i> <i class="fab fa-instagram-square cursor-pointer text-3xl"></i> <i class="fab fa-whatsapp-square cursor-pointer text-3xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="form 
                                    phone:w-full
                                    tablet:w-1/2
                                    laptop:w-1/2
                                    destkop:w-1/2
                                    "
                    >
                            <form className="
                                    phone:py-7 phone:px-5 phone:bg-gray-100 phone:rounded-xl
                                    tablet:w-full tablet:py-20 tablet:px-5 tablet:bg-gray-100 tablet:rounded-xl tablet:shadow-2xl
                                    laptop:w-full laptop:py-20 laptop:px-5 laptop:bg-gray-100 laptop:rounded-xl laptop:shadow-2xl
                                    desktop:w-8/12 desktop:py-8 desktop:px-5 desktop:bg-gray-100 desktop:rounded-xl desktop:shadow-2xl desktop:float-left
                                     ">
                                <h2 className="text-3xl text-center mb- text-blue-900 font-sans font-bold uppercase">Contacto</h2>
                                <input className="w-full rounded mt-5 p-2.5 border-none bg-white text-base outline-none focus:ring-2 focus:ring-blue-600" 
                                type="text"
                                id="nombre"
                                name="nombre"
                                onChange={e => handleChange(e)}
                                
                                placeholder="Nombre"/>
                                <input className="w-full mt-5 p-2.5 border-none bg-white text-base outline-none focus:ring-2 focus:ring-blue-600"
                                id="correo" 
                                type="email"
                                name="correo"
                                onChange={ e => handleInputChange(e)}
                                
                                placeholder="Correo"/>
                                <input className="w-full h-24 mt-5 p-2.5 pb-16 border-none bg-white text-base outline-none focus:ring-2 focus:ring-blue-600"
                                type= "text"
                                name="mensaje"
                                id="mensaje" 
                                onChange={e => onInputChange(e)}
                                placeholder="Mensaje"
                                 maxLength={500}/>
                                
                                <button className="w-full rounded py-2.5  px-10 mt-10 border-none text-sm bg-blue-900 font-semibold cursor-pointer text-white outline-none hover:bg-blue-500 transform transition-all hover:-translate-y-1 hover:scale-110duration-300  "  type="button"
                                variant="contained"
                                onClick={onSubmit}>
                                    Enviar
                                </button>
                            </form>
                    </div>  
                </div>
                
                <div className="absolute top-0 right-0 mt-5 mr-5">
                    <img className="w-40
                                phone:hidden
                                tablet:hidden tablet:w-1/4 tablet:fixed tablet:left-6
                                laptop:block laptop:w-1/8 laptop:fixed laptop:right-6
                                desktop: block desktop:w-1/6 desktop:fixed desktop:right-0" src={sep} alt="sep"/>
                </div>
                         
        </div>
    )
}

export default Contact;