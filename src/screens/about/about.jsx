import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import './about.css';

export default function About() {
    return (
        <div className="about">
            <Navbar />

            <main className="about-content">
                <section className="about-intro">
                    <p className="about-subtitle">Sobre Mim</p>

                    <p>
                        Sou desenvolvedora Full-Stack, com foco e especialidade em desenvolvimento <span className="highlight">web</span> e <span className="highlight">mobile</span>.
                    </p>

                    <p>
                        Tenho 21 anos e estou no 6º período do curso de Engenharia de Software na Universidade
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
        description: 'Capacidade de expressar ideias com clareza e objetividade.'
    },
    {
        title: 'Trabalho em equipe',
        description: 'Capacidade de colaborar ativamente com o grupo, compartilhando conhecimentos.'
    },
    {
        title: 'Adaptabilidade',
        description: 'Capacidade de se ajustar rapidamente a mudanças, novos cenários e desafios'
    },
    {
        title: 'Comprometimento',
        description: 'Capacidade de agir com alto nível de comprometimento para entregar sempre os melhores resultados'
    },
    {
        title: 'Organização',
        description: 'Capacidade de priorizar atividades e planejar a rotina de trabalho de forma eficiente'
    },
];