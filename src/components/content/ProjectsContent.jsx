import React from 'react'

export default function ProjectsContent() {
  const projects = [
    {
      title: 'ZeroTrace',
      type: 'Android application',
      year: '2025',
      description: 'ZeroTrace is a secure data-wiping Android app built with Flutter. It ensures permanently unrecoverable deletion of files by overwriting their content with zeros or cryptographically secure random data. Users can wipe sensitive files before selling, recycling, or handing over their devices, ensuring complete privacy and erasure of their personal data.',
      technologies: ['Flutter'],
      link: 'https://github.com/omhujband/ZeroTrace',
    },
    {
      title: 'CountIT',
      type: 'Android application',
      year: '2025',
      description: 'CountIT is a modern, intuitive counter management application built with Flutter. Whether youre tracking daily habits, counting days since an important event, or monitoring progress towards your goals, CountIT provides a beautiful and efficient way to keep count of what matters to you.',
      technologies: ['Flutter', 'Hive'],
      link: 'https://github.com/omhujband/CountIT',
    },
    {
    title: 'Image Hiding App',
      type: 'Python application',
      year: '2025',
      description: 'A simple steganography-based desktop application that allows you to hide (encode) and retrieve (decode) secret messages inside image files using the Least Significant Bit (LSB) method. Built with Tkinter for GUI and Pillow/NumPy for image processing.',
      technologies: ['Python', 'NumPy', 'Tkinter'],
      link: 'https://github.com/omhujband/Image-hiding-app',
    },
  ]

  return (
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
  )
}