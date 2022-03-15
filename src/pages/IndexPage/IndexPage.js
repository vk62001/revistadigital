import React from 'react'
import { Link } from 'react-router-dom';
import './IndexPage.css';
import logotecnm from '../../assets/images/logotecnm.png';
import logo1 from '../../assets/images/logo.png';
import NavBar from '../../components/Navbar';
import SocialCount from '../../components/SocialCount';



const IndexPage = () => {
    return (
      <div>
        <div className="fixed h-full w-full">
          <img
            className="absolute w-2/3 h-2/3 mt-24 ml-32 opacity-50
                phone:block phone:w-3/4 phone:h-1/5 phone:mt-80 phone:ml-10 phone:opacity-50
                tablet:block tablet:w-3/4 tablet:h-2/5 tablet:mt-36 tablet:ml-20 tablet:opacity-50
                laptop:block laptop:w-3/4 laptop:h-2/5 laptop:mt-36 laptop:ml-20 laptop:opacity-50 
                desktop:block desktop:w-2/3 desktop:h-2/3 desktop:mt-24 desktop:ml-36 desktop:opacity-50"
            src={logotecnm}
          />
          <div className="h-full w-full grid grid-rows-6 grid-flow-col bg-gray-200">
            <NavBar white={false} />
            <h2 className=" font-sans text-7xl font-bold uppercase fixed left-0 right-0 m-auto text-center text-blue-900 mt-24">
              Revista <br /> Digital
              <br />
            </h2>
            <div>
              <div className="">
                <div className="absolute top-0 right-0 mt-64 mr-20">
                  <img
                    className="w-96
                                        phone:block phone:w-1/3 phone:fixed phone:left-1/3 phone:bottom-2 
                                        tablet:block tablet:w-1/4 tablet:fixed tablet:left-3/4 tablet:bottom-1/2 
                                        laptop:block laptop:w-1/4 laptop:left-auto laptop:right-8 laptop:bottom-0
                                        desktop:block desktop:w-1/4 desktop:left-2/5 desktop:right-20 dektop:mt-8 desktop:bottom-auto"
                    src={logo1}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div>
              <div
                className="absolute ml-24 phone:ml-4 phone:my-2 
                                              tablet:ml-10 tablet:mr-10 tablet:my-28"
              >
                <h2 className=" text center text-blue-900 font-sans text-5xl">
                  Bienvenido
                </h2>

                <p className="text-gray-700 mt-8 text-base">
                  El cambio del aprendizaje de manera presencial a la era
                  digital ha generado y <br />
                  propiciado un grado de responsabilidad y compromiso de
                  todos...
                </p>

                <br />
                <div
                  className="phone:grid phone:grid-cols-2 phone:gap-4 phone:w-11/12 
                                        tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-11/12  
                                        laptop:w-5/6 desktop:w-11/12"
                >
                  <Link
                    to="/login"
                    className=" phone:py-2 rounded-full bg-blue-900 text-white phone:text-2xl text-center
                                    bg-white p-3 hover:bg-blue-500 hover:text-white
                                    transform transition-all hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    Registrarse
                  </Link>
                  <Link
                    to="/about"
                    className="phone:py-2 rounded-full bg-blue-900 text-white phone:text-2xl text-center
                                    bg-white p-4 hover:bg-blue-500 hover:text-white
                                    transform transition-all hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    Ver Más
                  </Link>
                  <SocialCount></SocialCount>
                 
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
    );
};

export default IndexPage;
