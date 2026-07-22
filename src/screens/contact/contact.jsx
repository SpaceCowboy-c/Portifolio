import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import './contact.css';
import Foto_Perfil from '../../assets/Foto_Perfil.jpeg';

export default function Contact() {

    const email = "caroline.martini@universo.univates.br";
    // Corrigida a digitação da palavra "trabalho"
    const subject = encodeURIComponent("Olá, gostaria de conversar com você sobre oportunidade de trabalho");

    const handleEmailClick = () => {
        // Detecta se o usuário está em dispositivo móvel (celular/tablet)
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // No Mobile/App: dispara o mailto que o celular entende nativamente
            window.location.href = `mailto:${email}?subject=${subject}`;
        } else {
            // No Computador/Web: abre a tela de composição do Gmail em nova aba
            window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
                '_blank'
            );
        }
    };

    return (
        <div className="contact" id="contact">
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
                        <button
                            type="button"
                            onClick={handleEmailClick}
                            className="contact-link"
                        >
                            Email
                        </button>

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