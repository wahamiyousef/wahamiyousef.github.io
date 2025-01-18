import React from 'react';
import '../styles/projects.css'
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as Link } from '../assets/externalLink.svg'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ArabicScriptAI',
      description: 'Scholarly open source web-app for learning how to write Arabic letters',
      stack: "Python, JavaScript, Vercel, PocketBase, Tesseract OCR",
      link: 'https://arabic-script-ai.vercel.app/',
      github: 'https://github.com/wahamiyousef/ArabicScriptAI'
    },
    {
      id: 2,
      title: 'HomeWorthAI',
      description: 'RAG AI chat bot designed to help Californian fire victims jog their memory about valuable items to help them file insurance claims',
      stack: "Pinecone (Vector DB for RAG), CLIP, Detectron2 (Vision model from Meta), Python (FastAPI), Vite, TypeScript, Tailwind",
      github: 'https://github.com/wahamiyousef/HomeWothAI'
    },
    {
      id: 3,
      title: 'Invade Tower Defense',
      description: 'Tower Defense game using Java utilizing object-oriented programming (OOP)',
      stack: "Java, OOP",
      link: "",
      github: "https://github.com/wahamiyousef/Invade-Tower-Defense"
    },
    {
      id: 4,
      title: 'Creaks',
      description: 'Horror game developed for 2 week game jam with Unity using C#',
      stack: 'Unity, Blender, Photoshop, FL Studio',
      link: 'https://stuvs.itch.io/creaks',
    },
  ];

  return (
    <div id='projects' className='card'>
      <h1>Projects</h1>
      <div className='project-cards'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h2>{project.title}</h2>
              
              <div style={{display: 'flex'}}>
                {project.github && (
                  <a href={project.github} target='_blank' rel='noopener noreferrer'>
                    <Github />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <Link />
                  </a>
                )}
              </div>

            </div>
            
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
