import React from "react";
import Navbar from "../../components/Navbar/navbar";
import "./certifications.css";

export default function Certifications() {
    return (
        <div className="certifications">
            <Navbar />
            <main className="certifications-content">
                <p className="certifications-subtitle">Aprendizado contínuo</p>
                <h1 className="certifications-title">Certificações</h1>
                <p className="certifications-description">
                    Aqui estão algumas das certificações que obtive ao longo da minha jornada de aprendizado e desenvolvimento profissional.
                </p>
                    <div className="certifications-row">
                            {certifications.map((certification, index) => (
                        <a
                            href={certification.file}
                            target="_blank"
                            rel="noreferrer"
                            className="certifications-card"
                            key={index}
                        >
                                <i className={certification.icon}></i>
                                <h3 className="certifications-name">{certification.name}</h3>
                                <p className="certifications-description">{certification.description}</p>
                                <span className="certifications-link">Ver certificado →</span>
                        </a>
                    ))}        
            </div>
         </main>
     </div>
        
    );
}

const certifications = [
    {
        name: 'Cisco CCNA',
        description: 'Fundamentos de redes, switching, routing e configuração wireless.',
        file: '/certifications/CCNASRWEUpdate20250723-32-qsd6bf.pdf',
        icon: 'fa-solid fa-network-wired'
    },
    {
        name: 'Red Hat',
        description: 'Certificado de participação em curso do Red Hat para aplicações em linux.',
        file: '/certifications/certificate-of-attendance.pdf',
        icon: 'devicon-redhat-plain colored'
    },
    {
        name: 'Python',
        description: 'Fundamentos da linguagem Python aplicados a projetos práticos.',
        file: '/certifications/certificado.pdf',
        icon: 'devicon-python-plain colored'
    },
];