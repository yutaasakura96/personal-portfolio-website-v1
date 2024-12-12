import React from 'react';

const workExperiences = [
  {
    company: 'Watanabe Construction Industry',
    position: 'Construction Worker (Scaffolder)',
    start: 'April 2016',
    end: 'January 2020',
    location: 'Tokyo, Japan',
    hq: 'Shinjuku, Tokyo, Japan',
    website: 'https://www.watanabe-construction.jp',
    description: [
      'Worked on various construction projects as a scaffolder.'
    ]
  },
  {
    company: 'Watanabe Construction Industry',
    position: 'Construction Foreman',
    start: 'January 2020',
    end: 'June 2024',
    location: 'Tokyo, Japan',
    hq: 'Shinjuku, Tokyo, Japan',
    website: 'https://www.watanabe-construction.jp',
    description: [
      'Supervised construction projects and managed a team of scaffolders.'
    ]
  },
  {
    company: 'Tierline Inc.',
    position: 'Full Stack Developer',
    start: 'October 2024',
    end: 'Present',
    location: 'Remote',
    hq: 'Osaka, Japan',
    website: 'https://www.tierline.com',
    description: [
      'Developed and deployed scalable web applications using React, Spring Boot, and MySQL, improving performance and user experience.',
      'Collaborated with cross-functional teams to design and implement new features based on client requirements.',
      'Played a key role in a team that created and implemented a web-based employee management system for our company, built using Java Spring Boot, Typescript, React, and Tailwind CSS.'
    ]
  },
];

const WorkHistory = () => {
  return (
    <div>
      <h2>Work History</h2>
      <ul>
        {workExperiences.map((experience, index) => (
          <li key={index}>
            <h3>{experience.company}</h3>
            <p>{experience.position}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkHistory;
