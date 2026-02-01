import React from 'react'

export default function EducationContent() {
  const education = [
    {
      degree: 'B.Tech',
      institution: 'Lokmanya Tilak College of Engineering (LTCoE)',
      period: '2024 - 2027',
      description: 'Studying Computer Engineering. Discovering hobbies and passion each day. Enhancing my technical skills and working on various academic projects.',
      highlights: ['Flutter Developer', 'React Developer', 'Diving into Machine Learning'],
    },
    {
      degree: 'Diploma - Information Technology',
      institution: 'G.V. Acharya Polytechnic',
      period: '2020 - 2024',
      description: 'I have completed my diploma in Information Technology. During this program, I learned programming languages like C, C++, PHP, JavaScript, and essential subjects such as Operating Systems and DBMS.',
      highlights: ['Front End Development', 'Database Management System (DBMS)', 'Javascript'],
    },
  ]

  return (
    <div className="space-y-8">
      <p className="text-body">
        The foundations of knowledge that shaped this journey.
      </p>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <article 
            key={index}
            className="glass-panel p-6 rounded-lg space-y-4"
          >
            <header>
              <h3 className="text-lg text-starlight font-medium">
                {edu.degree}
              </h3>
              <p className="text-stardust">{edu.institution}</p>
              <p className="text-caption text-stardust/60">{edu.period}</p>
            </header>
            
            <p className="text-body">{edu.description}</p>
            
            {edu.highlights && (
              <ul className="space-y-1">
                {edu.highlights.map((item, i) => (
                  <li key={i} className="text-stardust text-sm flex items-start gap-2">
                    <span className="text-planet-mercury mt-1">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}