import React from 'react';

const workExperiences = [
  {
    company: 'Tierline Inc.',
    position: 'Full Stack Developer',
    start: 'October 2024',
    end: 'Present',
    location: 'Remote',
    hq: 'Osaka, Japan',
    website: 'https://www.tierline.com/index.html',
    description: [
      'Developed and deployed scalable web applications using React, Spring Boot, and MySQL, improving performance and user experience.',
      'Collaborated with cross-functional teams to design and implement new features based on client requirements.',
      'Played a key role in a team that created and implemented a web-based employee management system for our company, built using Java Spring Boot, Typescript, React, and Tailwind CSS.'
    ]
  },
  {
    company: 'Watanabe Construction Industry',
    position: 'Construction Foreman',
    start: 'January 2020',
    end: 'June 2024',
    location: 'Tokyo, Japan',
    hq: 'Shinjuku, Tokyo, Japan',
    website: 'https://www.w-k-k.com/',
    description: [
      'Supervised construction projects and managed a team of scaffolders.'
    ]
  },
  {
    company: 'Watanabe Construction Industry',
    position: 'Construction Worker (Scaffolder)',
    start: 'April 2016',
    end: 'January 2020',
    location: 'Tokyo, Japan',
    hq: 'Shinjuku, Tokyo, Japan',
    website: 'https://www.w-k-k.com/',
    description: [
      'Worked on various construction projects as a scaffolder.'
    ]
  },
];

const WorkHistory = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Work History</h2>
      <ul className="space-y-6">
        {workExperiences.map((experience, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold">{experience.company}</h3>
            <p className="text-lg text-gray-700">{experience.position}</p>
            <p className="text-sm text-gray-500">{experience.start} - {experience.end}</p>
            <p className="text-sm text-gray-500">{experience.location}</p>
            <p className="mt-4 text-gray-600">{experience.description.join(' ')}</p>
            <a href={experience.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">Company Website</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkHistory;
