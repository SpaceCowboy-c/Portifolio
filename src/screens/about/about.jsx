import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import './about.css';

export default function About() {
    return (
        <div className="about">
            <Navbar />

            <main className="about-content">
                {/* Lado Esquerdo: Introdução */}
                <section className="about-intro">
                    <p className="about-subtitle">Sobre Mim</p>

                    <h1 className="about-main-title">
                        Transformando ideias em <span className="highlight-purple">código limpo</span> e soluções reais.
                    </h1>

                    <p className="about-paragraph">
                        Sou desenvolvedora Full-Stack com foco e especialidade em desenvolvimento <span className="highlight">web</span> e <span className="highlight">mobile</span>.
                    </p>

                    <p className="about-paragraph">
                        Atualmente no 6º período do curso de Engenharia de Software na Universidade do Vale do Taquari (Univates), onde venho construindo uma base sólida em arquitetura de software enquanto aplico esse conhecimento em projetos práticos.
                    </p>

                    <p className="about-paragraph">
                        Gosto de criar soluções funcionais, bem estruturadas e com excelente experiência de usuário, unindo bom design com código escalável e organizado.
                    </p>

                    {/* Destaques rápidos / Tags */}
                    <div className="about-tags">
                        <span className="about-tag">🎓 Eng. de Software (Univates)</span>
                        <span className="about-tag">💻 Full-Stack Web developer</span>
                    </div>
                </section>

                {/* Lado Direito: Soft Skills (Sem ícones) */}
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
        description: 'Clareza e objetividade ao expressar ideias, alinhar expectativas e documentar processos.'
    },
    {
        title: 'Trabalho em equipe',
        description: 'Colaboração ativa com o time, compartilhando conhecimento e somando forças para resolver problemas.'
    },
    {
        title: 'Adaptabilidade',
        description: 'Aprendizado rápido e facilidade de adaptação a novas tecnologias, ferramentas e cenários.'
    },
    {
        title: 'Comprometimento',
        description: 'Foco em entregas de alto nível, responsabilidade com prazos e constância nos resultados.'
    },
    {
        title: 'Organização',
        description: 'Planejamento eficiente da rotina, gestão do tempo e priorização inteligente de demandas.'
    },
];