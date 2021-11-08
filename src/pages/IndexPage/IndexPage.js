import React from 'react'
import { Link } from 'react-router-dom';
import './IndexPage.css';
import LogoTect from '../../assets/images/logotec.png';
import logo1 from '../../assets/images/logo.png';
import NavBar from '../../components/Navbar';


const IndexPage = () => {
    return (
        <div>
            
            <h2 className="titulo font-sans text-7xl font-bold uppercase">Revista <br /> Digital<br/>
            
           </h2>
         
               
                <img className="logotec phone:hidden laptop:block" src={LogoTect} alt="logotec" />
                <div className="fixed h-full w-full">
                <div className="h-full w-full grid grid-rows-6 grid-flow-col bg-blue-900">
                    <NavBar />
                    <div>
                    <div clasName="">
                     <div className="absolute top-0 right-0 mt-64 mr-20">
                      <img className="w-96 
                                        phone:block phone:w-1/3 phone:fixed phone:left-1/3 phone:bottom-10
                                        tablet:block tablet:w-1/3 tablet:fixed tablet:left-1/3 tablet:bottom-10 
                                        laptop:block laptop:w-1/3 laptop:left-auto laptop:right-8 laptop:bottom-2/4
                                        desktop:block desktop:w-1/3 desktop:left-/4 desktop:right-8 dektop:mt-8 desktop:bottom-auto" src={logo1} alt="logo" />
                    </div>
                      </div>
                    </div>
                    <div>
                        <div className="ml-24 phone:ml-2 tablet:ml-10 table:mr-10">
                        <h2 className=" text center text-white font-sans text-7xl">
                            Bienvenido
                        </h2>
                       
                        <p className="text-white mt-10 text-base">
                            El cambio del aprendizaje de manera presencial a la era digital ha generado y <br />propiciado un grado de responsabilidad y compromiso de todos...
                        </p>
                       
                        <br/>
                        <div className="phone:grid phone:grid-cols-2 phone:gap-4 phone:w-11/12 
                                        tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-11/12  
                                        laptop:w-1/3 desktop:w-2/5 ">
                                            
                                <Link 
                                    className="phone:py-2 rounded-full bg-white phone:text-2xl text-center"
                                >
                                    Registrar
                                </Link>
                                <Link 
                                    className="phone:py-2 rounded-full bg-white phone:text-2xl text-center"
                                >
                                    Ver Más
                                </Link>
                        </div>
                        {/* <div className="my-4 phone:flex ">
                        <a 
                            href="/formulario" 
                            className="bg-white hover:bg-blue-600 text-black px-4 py-4  rounded-full text-3xl mt-10 text-center cursor-pointer  
                                        phone:text-sm phone:px-2 phone:py-2 phone:flex phone:align-middle phone: "> Registrarse ahora</a>
                        <a href="/about" className="  bg-white hover:bg-blue-600 text-black px-4 py-4 rounded-full text-3xl mt-10 ml-8 text-center cursor-pointer "> Ver más</a>
                        </div>                        */}
                         </div>
                    </div>
                   
                </div>
                </div>
        </div>
   
      
    )
};

export default IndexPage;
