import React from 'react';
import Navbar from '../../components/navbar/Navbar';  //importa o código do navbar
import './home.css';

export default function Home() {
    return (
        <div className="home">
            <Navbar /> {/* componente do navbar - lado esquerdo */}

            <main className="content">
                <div className="hero"> {/* seção do inicial*/}
                    <p className="hero-subtitle">Full-Stack Developer</p>

                    <h1 className="hero-title">
                        Olá, eu sou <span className="highlight">Caroline</span>,
                        <br />
                        desenvolvedora Full-Stack
                    </h1>

                    <p className="hero-description">
                        Transformo ideias em aplicações web rápidas, funcionais e bem projetadas.
                    </p>

                    <a href="#contact" className="hero-button">
                        Fale comigo
                    </a>
                </div>

                <div className="hero-decoration"> {/* elementos decorativos da seção inicial (as bolhas) */}
                    <div className="bolha bolha-1"></div>
                    <div className="bolha bolha-2"></div>
                    <div className="bolha bolha-3"></div>
                </div>
            </main>
        </div>
    );
}