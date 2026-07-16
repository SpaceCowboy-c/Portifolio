import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import './contact.css';
import Foto_Perfil from '../../assets/Foto_Perfil.jpeg';

export default function Contact() {
    return (
        <div className="contact">
            <Navbar />

            <main className="contact-content">

                <div className="contact-photo-wrapper">
                    <img src={Foto_Perfil} alt="Foto de Caroline" className="contact-photo" />
                </div>
                <div className="contact-info">
                    <p className="contact-subtitle">Vamos conversar?</p>
                    <h1 className="contact-title">Entre em contato</h1>
                    <p className="contact-description">
                        Estou aberta a novas oportunidades e projetos. Me manda uma mensagem!
                    </p>

                    <div className="contact-links">
                        <a href="https://mail.google.com/mail/?view=cm&to=caroline.martini@universo.univates.br" target="_blank" rel="noreferrer" className="contact-link">Email</a>
                        <a href="https://www.linkedin.com/in/caroline-martini-63a5523a4/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
                        <a href="https://github.com/SpaceCowboy-c/" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
                    </div>

                    <p className="contact-farewell">
                        Obrigada por chegar até aqui. Espero, em breve, poder aplicar meus
                        conhecimentos em prol de algo maior, contribuindo para
                        transformações reais através da tecnologia.
                    </p>
                </div>
            </main>
        </div>
    );
}          
