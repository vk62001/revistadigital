import React from 'react'
import { Link } from 'react-router-dom';
import './IndexPage.css';
import LogoTect from '../../assets/images/logotec.png';
import logo1 from '../../assets/images/logo.png';
import NavBar from '../../components/Navbar';


const IndexPage = () => {
    return (
        <div>                       
                <img className="logotec phone:hidden laptop:block" src={LogoTect} alt="logotec" />
                <div className="fixed h-full w-full">
                <div className="h-full w-full grid grid-rows-6 grid-flow-col bg-blue-900">
                    <NavBar 
                        white={true}
                    />
                    <h2 className="font-sans text-7xl font-bold uppercase fixed left-0 right-0 m-auto text-center text-white mt-28">Revista <br /> Digital<br/></h2>
                    <div>
                    <div className="">
                     <div className="absolute top-0 right-0 mt-64 mr-20">
                      <img className="w-96 
                                        phone:block phone:w-1/3 phone:fixed phone:left-1/3 phone:bottom-2
                                        tablet:block tablet:w-1/4 tablet:fixed tablet:left-3/5 tablet:bottom-10 
                                        laptop:block laptop:w-1/3 laptop:left-auto laptop:right-8 laptop:bottom-96
                                        desktop:block desktop:w-1/4 desktop:left-2/5 desktop:right-20 dektop:mt-8 desktop:bottom-1/3" src={logo1} alt="logo" />
                    </div>
                      </div>
                    </div>
                    <div>
                        <div className="absolute ml-24 phone:ml-4 phone:my-2 
                                              tablet:ml-10 tablet:mr-10 tablet:my-28">
                        <h2 className=" text center text-white font-sans text-5xl">
                            Bienvenido
                        </h2>
                       
                        <p className="text-white mt-8 text-base">
                            El cambio del aprendizaje de manera presencial a la era digital ha generado y <br />propiciado un grado de responsabilidad y compromiso de todos...
                        </p>
                       
                        <br/>
                        <div className="phone:grid phone:grid-cols-2 phone:gap-4 phone:w-11/12 
                                        tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-11/12  
                                        laptop:w-5/6 desktop:w-11/12">
                                            
                                <Link 
                                    className="phone:py-2 rounded-full bg-white phone:text-2xl text-center
                                    bg-white p-3 hover:bg-blue-500"
                                >
                                    Registrarse
                                </Link>
                                <Link 
                                    className="phone:py-2 rounded-full bg-white phone:text-2xl text-center
                                    bg-white p-4 hover:bg-blue-500"
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
