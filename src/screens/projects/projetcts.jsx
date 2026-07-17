import React from 'react';
import Navbar from '../../components/Navbar';
import './projects.css';

export default function Projects() {
    return (
   <div className="projects">
              <Navbar />
              <main className="projects-content">
                  <p className="projects-subtitle">Aprendizado contínuo</p>
                  <h1 className="projects-title">Projetos</h1>
                  <p className="projects-description">
                      Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada, projetos desenvolvidos no meio acadêmico mas também em contextos pessoais.
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
                                  <i className={project.icon}></i>
                                  <h3 className="projects-name">{project.name}</h3>
                                      <p className="projects-card-description">{project.description}</p>
                                  <span className="projects-link">Ver projeto →</span>
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
    },
    {
        name: 'SGO-Rodovias',
        description: 'O projeto  mobile foi pensado em realizado no ambito academico a ideia A concessionária é responsável pela manutenção da infraestrutura rodoviária em 350 km das BR-386 e BR-116, monitorando e atendendo falhas em sistemas de iluminação, praças de pedágio e equipamentos de pista. O sistema além de realizar as principais funcilalidades, crud, login dinamico, ainda conta com alocamento de equipe automaticamnte através de um algoritmo de alocamento, que leva em consideração as competencias por técnico cadastrado. A stack utilizada foi TypeScript, React Native e Supabase para o banco de dados.',

    },
    {
        name: 'Python',
        description: 'Fundamentos da linguagem Python aplicados a projetos práticos.',
    },
];