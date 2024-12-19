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
    logo: 'https://www.tierline.com/images/tierline_logo.svg',
    description: [
      'Developed and deployed scalable web applications using React, Spring Boot, and MySQL, improving performance and user experience.',
      'Collaborated with cross-functional teams to design and implement new features based on client requirements.',
      'Played a key role in a team that created and implemented a web-based employee management system for our company, built using Java Spring Boot, Typescript, React, and Tailwind CSS.'
    ],
    techStack: ['React', 'Java', 'Spring Boot', 'MySQL', 'PostgresSQL', 'Javascript' ,'Typescript', 'Tailwind CSS', 'CSS', 'SCSS', 'HTML']
  },
  {
    company: 'Watanabe Construction Industry',
    positions: [
      {
        title: 'Construction Foreman',
        start: 'January 2020',
        end: 'June 2024',
        description: [
          'Supervised construction projects and managed a team of scaffolders.'
        ],
        techStack: []
      },
      {
        title: 'Construction Worker (Scaffolder)',
        start: 'April 2016',
        end: 'January 2020',
        description: [
          'Worked on various construction projects as a scaffolder.'
        ],
        techStack: []
      }
    ],
    location: 'Tokyo, Japan',
    hq: 'Shinjuku, Tokyo, Japan',
    website: 'https://www.w-k-k.com/',
    logo: 'wkk_logo.png'
  }
];

const WorkHistory = () => {
  return (
    <div id="work-history-component"
    className="bg-[##eef7fb] lg:h-100 pt-24 pb-24"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #eef7fb 0 50%, #E0F3FD 0% 100%)",
      width: "100%",
    }}>
      <div className='container m-auto'>
      <h1 className="text-5xl text-[#48AFDE] mb-10 md:px-24 px-5">Work History</h1>
      <ul className="space-y-6">
        {workExperiences.map((experience, index) => (
          <li key={index} style={{ boxShadow: '#48AFDE -5px 10px 20px 0px' }} className="p-6 lg:p-10 rounded-xl bg-white mb-10 transition-all transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <a href={experience.website} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex flex-col mb-4">
                {experience.logo && (
                  <img src={experience.logo} alt={`${experience.company} logo`} className="w-28 h-28 mr-4 mb-5"/>
                )}
                <h4 className="text-3xl font-semibold text-[#48AFDE]">{experience.company}</h4>
                {experience.position ? (
                  <>
                    <p className="text-lg font-normal">{experience.position}</p>
                    <p className="text-sm font-normal text-[#223740]">{experience.start} - {experience.end}</p>
                    <p className="text-sm font-normal text-[#223740]">{experience.location}</p>
                    <p className="mt-4 font-[300]">{experience.description.join(' ')}</p>
                  </>
                ) : (
                  experience.positions.map((position, posIndex) => (
                    <div key={posIndex} className="mt-4">
                      <p className="text-lg font-normal">{position.title}</p>
                      <p className="text-sm font-normal text-[#223740]">{position.start} - {position.end}</p>
                      <p className="mt-2 font-[300]">{position.description.join(' ')}</p>
                    </div>
                  ))
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default WorkHistory;
