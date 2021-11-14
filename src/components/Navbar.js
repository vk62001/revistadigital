import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import BackDroop from '../UXComponents/BackDroop';

const NavBar = props => {
    const [menu, setMenu] = useState(false);

    const openMenu = () =>{
        setMenu(!menu);
    }

    return (
        <div className="h-1/4 flex w-full px-2 desktop:px-0">
            <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-0 phone:w-full cursor-pointer">
                <p className="desktop:hidden laptop:hidden tablet:hidden phone:block text-white
                 flex">
                      </p>
                    <div  className=" block desktop:hidden laptop:hidden tablet:hidden px-2 py-4">
                        <i 
                            className="fas fa-bars text-white" 
                            id="mobile-menu"
                            onClick={openMenu}
                        ></i>
                    </div>
               
            </div>
            <div id="menu" className="desktop:w-1/2 tablet:w-full tablet:block phone:hidden hidden ">
                <ul  className="flex justify-center items-center">
                <Link to={"/" }  className={'p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex'}>
                        <i className="fas fa-home"></i>
                        <p className="m-0 text-xs ml-2">Inicio</p>
                </Link>
                <Link to={"/login" }  className={'p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex'}>
                        <i className="fas fa-user"></i>
                        <p className="m-0 text-xs"></p>
                </Link>
                <Link to={"/editions"} className={"p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex"}>
                        <i className="fas fa-book-open"></i>
                        <p className="m-0 text-xs ml-1">Ediciones</p>
                     </Link>
                     <Link to={"/about"} className={"p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex "}>
                        <i className="fas fa-bookmark"></i>
                        <p className="m-0 text-xs ml-1 ">Sobre la Revista</p>
                     </Link>
                     <Link to={"/comments"} className={"p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex"}>
                        <i className="fas fa-comment-dots"></i>
                        <p className="m-0 text-xs ml-1">Comentarios</p>
                     </Link>
                     <Link to={"/contact"} className={"p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex "}>
                        <i className="fas fa-address-card"></i>
                        <p className="m-0 text-xs ml-1">Contacto</p>
                     </Link>            
                </ul>
            </div>
            {menu && 
                <div className=" h-screen w-1/2 bg-white z-30 absolute left-0 top-0">
                    <menu>
                    <ul  className="justify-center items-center">
                <Link to={"/" }  className={'p-4 text-black cursor-pointer hover:border-black hover:border-b-2 border__black flex'}>
                        <i className="fas fa-home"></i>
                        <p className="m-0 text-xs ml-2">Inicio</p>
                </Link>
                <Link to={"/login" }  className={'p-4 text-black cursor-pointer hover:border-white hover:border-b-2 border__white flex'}>
                        <i className="fas fa-user"></i>
                        <p className="m-0 text-xs"></p>
                </Link>
                <Link to={"/editions"} className={"p-4 text-black cursor-pointer hover:border-white hover:border-b-2 border__white flex"}>
                        <i className="fas fa-book-open"></i>
                        <p className="m-0 text-xs ml-1">Ediciones</p>
                     </Link>
                     <Link to={"/about"} className={"p-4 text-black cursor-pointer hover:border-white hover:border-b-2 border__white flex "}>
                        <i className="fas fa-bookmark"></i>
                        <p className="m-0 text-xs ml-1 ">Sobre la Revista</p>
                     </Link>
                     <Link to={"/comments"} className={"p-4 text-black cursor-pointer hover:border-white hover:border-b-2 border__white flex"}>
                        <i className="fas fa-comment-dots"></i>
                        <p className="m-0 text-xs ml-1">Comentarios</p>
                     </Link>
                     <Link to={"/contact"} className={"p-4 text-black cursor-pointer hover:border-white hover:border-b-2 border__white flex "}>
                        <i className="fas fa-address-card"></i>
                        <p className="m-0 text-xs ml-1">Contacto</p>
                     </Link>            
                </ul>  
                    </menu>
                </div>
            }
            <BackDroop 
                menu = {menu}
                openMenu = {openMenu}
            />
        </div>
    );
};

export default NavBar;
