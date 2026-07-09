import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-text">C<span className="highlight">M</span></span>
            </div>

            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Soft-Skils</a></li>
                <li><a href="#hard-skills">Hard-Skills</a></li>
                <li><a href="#certifications">certifications</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}