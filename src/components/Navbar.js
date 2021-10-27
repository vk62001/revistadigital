import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const NavBar = props => {

    return (
        <div className="h-1/4 flex w-full">
            <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-0 phone:w-full">
                <p className="desktop:hidden laptop:hidden tablet:hidden sm:block text-white">
                    <i className="fas fa-bars"></i>
                </p>
            </div>
            <div className="desktop:w-1/2 tablet:w-full tablet:block phone:hidden">
                <ul className="flex justify-center items-center">
                <Link to={"/" }  className={'p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex'}>
                        <i className="fas fa-home"></i>
                        <p className="m-0 text-xs ml-2">Inicio</p>
                </Link>
                <Link to={"/contact" }  className={'p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white'}>
                        <i className="fas fa-user"></i>
                        <p className="m-0 text-xs">Contacto</p>
                </Link>
                <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white " >Iniciar Sesión</li>
                <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Ediciones</li>
                <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Sobre la revista</li>
                <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Comentarios</li>
                <li className="p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white ">Contacto</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;