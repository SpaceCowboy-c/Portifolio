import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-text">C<span className="highlight">M</span></span>
            </div>

            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Hard-Skills</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <p className="navbar-footer">
                Criado por: Caroline Martini <br /> Julho, 2026
            </p>
        </nav>
    );
}