import React from 'react'
import './IndexPage.css';
import LogoTect from '../../assets/images/logotec.png';
import logo1 from '../../assets/images/logo.png';
import NavBar from '../../components/Navbar';


const IndexPage = () => {
    return (
        <div>
            
            <h2 className="titulo font-sans text-7xl font-bold uppercase phone:block">Revista <br /> Digital<br/>
            <img className=" w-48 logocomi phone:hidden laptop:block " src={logo1} alt="logo" />
           </h2>
                
                <img className="logotec phone:hidden laptop:block" src={LogoTect} alt="logotec" />
                <div className="fixed h-full w-full">
                <div className="h-full w-full grid grid-rows-6 grid-flow-col bg-blue-800">
                    <NavBar />
                    <div>
                    
                    </div>
                    <div>
                        <div className="ml-24">
                        <h2 className="text-white font-sans text-7xl">
                            Bienvenido
                        </h2>
                       
                        <p className=" text-white mt-10 text-base">
                            El cambio del aprendizaje de manera presencial a la era digital ha generado y <br />propiciado un grado de responsabilidad y compromiso de todos...
                        </p>
                       
                        <br/>
                        <div className="phone:hidden laptop:block desktop:block flex flex-col">
                        <button1 className="bg-white text-black px-4 py-4 rounded-full text-3xl mt-10 font-bold flex-col"> Registrarse ahora</button1>
                        <button2 className="bg-white text-black px-4 py-4 rounded-full text-3xl mt-10 ml-8 font-bold"> Ver más</button2>
                        </div>
                        </div>
                    </div>
                    <div className="text-3xl"></div>
                    <div className="bg-white">
                        <div className="w-full phone:bg-red-600 tablet:bg-blue-600 laptop:bg-yellow-600 desktop:bg-green-300">Prueba</div>
                    </div>
                    <div className="bg-white">filas 6</div>
                </div>
                </div>
        </div>
    )
};

export default IndexPage;
