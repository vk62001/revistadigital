import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const links = [
        {
            title: 'Inicio',
            icon: 'fas fa-home',
            to: '/'
        },
        {
            title: 'Login',
            icon: 'fas fa-user',
            to: '/login'
        },
        {
            title: 'Ediciones',
            icon: 'fas fa-book-open',
            to: '/editions'
        },
        {
            title: 'Sobre la Revista',
            icon: 'fas fa-bookmark',
            to: '/about'
        },
        {
            title: 'Comentarios',
            icon: 'fas fa-comment-dots',
            to: '/comments'
        },
        {
            title: 'Contacto',
            icon: 'fas fa-address-card',
            to: '/contact'
        }
    ]

    const classLink = 'p-4 text-white cursor-pointer hover:border-white hover:border-b-2 border__white flex'
    const classLinkP = 'm-0 text-xs ml-1'

    return (
        <div className="h-1/4 flex w-full">
            <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-0 phone:w-full">
                <p className="desktop:hidden laptop:hidden tablet:hidden sm:block text-white">
                    <i className="fas fa-bars"></i>
                </p>
            </div>
            <div className="desktop:w-1/2 tablet:w-full tablet:block phone:hidden">
                <ul className="flex justify-center items-center">
                    {
                        links.map( link => (
                            <Link 
                                key={ link.title } 
                                to={ link.to } 
                                className={ classLink }
                            >
                                <i className={ link.icon }></i>
                                <p className={ classLinkP }>{ link.title }</p>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;