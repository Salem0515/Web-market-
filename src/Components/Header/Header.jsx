import React, { useState, useEffect } from 'react';
import "./Header.css";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Change this value based on when you want the color change
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <h1>WEBDEV</h1>
            <div className="list">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Support">Support</a></li>
                </ul>
            </div>
            <button className='Register'>Register</button>
        </nav>
    );
}

export default Header;
