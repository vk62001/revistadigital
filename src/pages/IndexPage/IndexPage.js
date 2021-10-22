import React from 'react'
import './IndexPage.css';
import LogoTect from '../../assets/images/logotec.png';
import logo1 from '../../assets/images/logo.png';


const IndexPage = () => {
    return (
        <div>
            <h2 className="titulo font-sans text-7xl font-bold uppercase">Revista <br /> Digital<br/>
            <img className="logocomi" src={logo1} alt="logo" />
           </h2>
                
                <img className="logotec" src={LogoTect} alt="logotec" />
                <div className="fixed h-full w-full">
                <div className="h-full w-full grid grid-rows-6 grid-flow-col bg-blue-800">
                    <div className="h-1/4 flex w-full">
                        <div className="w-1/2 "></div>
                        <div className="w-1/2 ">
                            <ul className="flex justify-center items-center">
                            <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Inicio</li>
                            <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white " >Iniciar Sesión</li>
                            <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Ediciones</li>
                            <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Sobre la revista</li>
                            <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Comentarios</li>
                            <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Contacto</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                    
                    </div>
                    <div>
                        <div className="ml-24">
                        <h2 className="text-white font-sans text-7xl">
                            Bienvenido
                        </h2>
                        <p className="text-white mt-10 text-base">
                            El cambio del aprendizaje de manera presencial a la era digital ha generado y <br />propiciado un grado de responsabilidad y compromiso de todos...
                        </p>
                        <br/>
                        <button1 className="bg-white text-black px-4 py-4 rounded-full text-3xl mt-10"> Registrarse ahora</button1>
                        <button2 className="bg-white text-black px-4 py-4 rounded-full text-3xl mt-10 ml-8"> Ver más</button2>
                        </div>
                    </div>
                    <div className="text-3xl"></div>
                    <div className="bg-white">filas 5</div>
                    <div className="bg-white">filas 6</div>
                </div>
                </div>
        </div>
    )
};

export default IndexPage;
