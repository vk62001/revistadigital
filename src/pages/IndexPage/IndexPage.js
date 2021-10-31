import React from 'react'
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
                <div className="h-full w-full grid grid-rows-6 grid-flow-col bg-blue-800">
                    <NavBar />
                    <div>
                    <div clasName=" ">
                     <div className="absolute top-0 right-0 mt-64 mr-20">
                      <img className="w-96  logocomi phone:hidden tablet:hidden laptop:block desktop:block" src={logo1}  />
                    </div>
                      </div>
                    </div>
                    <div>
                        <div className="ml-24">
                        <h2 className=" text center text-white font-sans text-7xl">
                            Bienvenido
                        </h2>
                       
                        <p className="text-white mt-10 text-base">
                            El cambio del aprendizaje de manera presencial a la era digital ha generado y <br />propiciado un grado de responsabilidad y compromiso de todos...
                        </p>
                       
                        <br/>
                        <div className="my-4 phone:flex ">
                        <a href="/formulario" className="bg-white hover:bg-blue-600 text-black px-4 py-4  rounded-full text-3xl mt-10 text-center cursor-pointer   "> Registrarse ahora</a>
                        <a href="/about" className="  bg-white hover:bg-blue-600 text-black px-4 py-4 rounded-full text-3xl mt-10 ml-8 text-center cursor-pointer "> Ver más</a>
                        </div>                       
                         </div>
                    </div>
                   
                </div>
                </div>
        </div>
   
      
    )
};

export default IndexPage;
