import React from 'react';
import '../styles/projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is a description for Project One.',
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is a description for Project Two.',
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'This is a description for Project Three.',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <div id='projects' className='div-card'>
      <h1>Projects</h1>
      <div className='project-cards'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
