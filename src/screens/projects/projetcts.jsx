import React from 'react';
import Navbar from "../../components/Navbar/navbar";
import './projects.css';

export default function Projects() {
    return (
   <div className="projects">
              <Navbar />
              <main className="projects-content">
                  <p className="projects-subtitle">Aprendizado contínuo</p>
                  <h1 className="projects-title">Projetos</h1>
                  <p className="projects-description">
                    Explore alguns dos principais projetos da minha trajetória, desenvolvidos tanto no meio acadêmico quanto em contextos pessoais.
                  </p>
                      <div className="projects-row">
                              {projects.map((project, index) => (
                          <a
                              href={project.file}
                              target="_blank"
                              rel="noreferrer"
                              className="projects-card"
                              key={index}
                          >
                                  <h3 className="projects-name">{project.name}</h3>
                                      <p className="projects-card-description">{project.description}</p>
                                    <span className="projects-link">Ver projeto → (github)</span>
                          </a>
                      ))}        
              </div>
           </main>
       </div>
    );
}

const projects = [
    {
        name: 'Clara Lavanderia ',
        description: 'projeto de extensão academica web desenvolvido para uma lavanderia do Rio Grande do Sul, com o objetivo de facilitar a comunicação entre clientes e a lavanderia. Nele inclui sistema de login, cadastro, agendamento de serviços e um painel administrativo para a lavanderia, dentro outras funcionalidades. O projeto for desenvolvido em grupo e nossa stack foi PHP com framework em Adianti e PostgreSQL para o banco de dados.',
        file: 'https://github.com/nicolasbugs/clara_lavanderia',
    },
    {
        name: 'SGO-Rodovias',
        description: 'Este projeto mobile acadêmico simula o sistema de uma concessionária de rodovias responsável por 350 km das BR-386 e BR-116. O aplicativo gerencia a manutenção de sistemas de iluminação, praças de pedágio e equipamentos de pista. Além das funcionalidades essenciais (CRUD e login dinâmico), o grande diferencial é um algoritmo que automatiza a alocação de equipes com base nas competências de cada técnico. Stack utilizada: TypeScript, React Native e Supabase.',
        file: 'https://github.com/SpaceCowboy-c/SGO-Rodovias',

    },
];