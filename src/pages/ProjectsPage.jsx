import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'

export default function ProjectsPage() {
  // PLACEHOLDER: Replace with your projects
  const projects = [
    {
      title: 'Project Name',
      type: 'Web Application',
      year: '2024',
      description: 'A brief description of what this project does and why it matters.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
  ]

  return (
    <SectionLayout
      title="Projects"
      subtitle="Venus · Radiant Creations"
      planetColor="#e6c87a"
      planetRadius={1.8}
      texture="/textures/2k_venus_surface.jpg"
    >
      <div className="space-y-8">
        <p className="text-body">
          Selected works that represent creativity, problem-solving, and growth.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="glass-panel p-6 rounded-lg space-y-4 group hover:border-planet-venus/30 transition-colors"
            >
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg text-starlight font-medium group-hover:text-planet-venus transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-caption text-stardust/60">
                    {project.type} · {project.year}
                  </p>
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    className="text-stardust hover:text-starlight transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </header>

              <p className="text-body">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-white/5 text-stardust"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}