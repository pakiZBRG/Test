import React from 'react';
import { isAuth, logout } from '../../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import MobileNav from './MobileNav';

export const Nav = ({ switchModal }) => {

    return (
        <>
            <nav className='nav'>
                <ToastContainer/>
                <h1 className='nav-header'>GMS</h1>
                <ul className='nav-links'>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>About us</li></a>
                    <a href="#project"><li>Project</li></a>
                    <a href="#faq"><li>FAQ</li></a>
                    <a href="#contact"><li>Contact</li></a>
                    {!isAuth() ? 
                        <span onClick={switchModal}><li>Register</li></span>
                            :
                        <span onClick={() => logout(() => toast.success("See you soon"))}><li>Logout</li></span>
                    }
                </ul>
            </nav>

            <MobileNav switchModal={switchModal}/>
        </>
    )
}
