import React from 'react';
import { Monitor, Database, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Monitor size={32} />,
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 65 },
        { name: 'TypeScript', level: 49 },
        { name: 'Vue.js', level: 29 },
        { name: 'Tailwind CSS', level: 31 }
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Backend',
      skills: [
        { name: 'Python / FastAPI / Django', level: 96 },
        { name: 'Node.js / Express', level: 76 },
        { name: 'PostgreSQL', level: 91 },
        { name: 'MongoDB', level: 71 }
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'DevOps & Cloud',
      skills: [
        // { name: 'AWS / Azure', level: 80 },
        { name: 'Docker', level: 52 },
        { name: 'CI/CD', level: 78 },
        { name: 'Linux', level: 55 }
      ]
    }
    // ,
    // {
    //   icon: <Smartphone size={32} />,
    //   title: 'Mobile & Design',
    //   skills: [
    //     { name: 'React Native', level: 82 },
    //     { name: 'Figma / Adobe XD', level: 88 },
    //     { name: 'UI/UX Design', level: 85 },
    //     { name: 'Responsive Design', level: 95 }
    //   ]
    // }
  ];

  const tools = [
    'Git', 'VS Code', 'Postman', 'Slack', 'Notion', 'Figma'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Skills & Tecnologias
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 leading-relaxed">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Ferramentas & Plataformas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;