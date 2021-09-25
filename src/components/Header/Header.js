import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="navbar">
                <div className="logo">
                    <h2>Hulu.c</h2>
                </div>
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                </div>
                
            </div>
        </header>
    );
};

export default Header;