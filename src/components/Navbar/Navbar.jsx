import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.svg';
import bellIcon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

export const Navbar = () => {
    const navRef = useRef();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark');
            } else {
                navRef.current.classList.remove('nav-dark');
            }
        });
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className='navbar' ref={navRef}>
            <div className="navebar-left">
                <img src={logo} alt="Netflix logo" />
                {/* Regular menu for desktop */}
                <ul className="desktop-menu">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
                {/* Hamburger menu button for mobile */}
                <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <span>☰</span>
                </div>
            </div>
            <div className="navebar-right">
                <img src={searchIcon} alt="search icon" className='icons' />
                <p className="children-text">Children</p>
                <img src={bellIcon} alt="Bell Icon" className='icons' />
                <div className="navebar-profile">
                    <img src={profile_img} alt="Profile" className='profile' />
                    <img src={caret_icon} alt="Profile" className='icons' />
                    <div className="dropDown">
                        <p onClick={() => {
                            logout();
                        }}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                        <li onClick={() => {
                            logout();
                        }}>Sign Out</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;