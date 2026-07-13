import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import './about.css';

export default function About() {
    return (
        <div className="about">
            <Navbar />

            <main className="content">
                <section className="about-intro">
                    <p className="about-subtitle">Sobre mim</p>

                    <p>
                        Sou desenvolvedora Full-Stack, com foco em desenvolvimento <span className="highlight">web</span> e <span className="highlight">mobile</span>.
                    </p>

                    <p>
                        Tenho 21 anos e estudo Engenharia de Software na Universidade
                        do Vale do Taquari (Univates), onde venho construindo uma base
                        sólida em desenvolvimento de software enquanto aplico esse
                        conhecimento em projetos práticos.
                    </p>

                    <p>
                        Gosto de transformar ideias em soluções funcionais e bem
                        pensadas, unindo bom design com código limpo e organizado.
                    </p>
                </section>

    
                <section className="soft-skills">
                    <p className="section-title">Soft Skills</p>
                    <div className="soft-skills-column">
                        {softSkills.map((skill, index) => (
                            <div className="soft-skill-card" key={index}>
                                <h3>{skill.title}</h3>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

const softSkills = [
    {
        title: 'Comunicação',
        description: '...'
    },
    {
        title: 'Trabalho em equipe',
        description: '...'
    },
    {
        title: 'Adaptabilidade',
        description: '...'
    },
    {
        title: '...',
        description: '...'
    },
    {
        title: 'Organização',
        description: '...'
    },
];