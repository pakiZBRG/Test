import React, { useState } from 'react';
import { isAuth, logout } from '../../helpers/auth';
import { toast } from 'react-toastify';

export default function MobileNav({switchModal}) {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => setMobileNav(!mobileNav);

    return (
        <nav className='mobile-nav'>
            <div onClick={toggleMobileNav} className='hamburger' style={{right: mobileNav && `-100%`}}>
                <p>Menu</p>
            </div>
        
            <div className='mobile-nav__links' style={{bottom: mobileNav && `0`}}>
                <span className='close' onClick={toggleMobileNav}>&times;</span>
                <ul>
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
            </div>
        </nav>
    )
}
