import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'MonFast',
      description: 'Sistema de monitoramento remoto de conexões com bancos de dados, inicialmente aplicado a unidades FAB (como TOC, SIZA, STM etc.), com alertas automáticos por e-mail e WhatsApp em caso de falha de conexão. O projeto foi desenvolvido por Lucas Marques durante o estágio no Frango Americano, visando garantir maior confiabilidade nos sistemas distribuídos entre as filiais. A estrutura do sistema é flexível e pode ser facilmente adaptada a diferentes empresas, serviços, tipos de banco de dados ou critérios de alerta, conforme a necessidade de cada cliente.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Fastapi', 'PyODBC', 'Schedule', 'Twilio'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'AjusteFast',
      description: 'Desenvolvi uma automação completa que extrai dados de extratos bancários em PDF, filtra e organiza as informações de forma inteligente, e exporta os resultados para planilhas estruturadas. A solução agiliza significativamente a análise financeira, reduz erros manuais e melhora a eficiência no gerenciamento de dados financeiros.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'PyWebView', 'Tabula','Bootstrap@5.3.3]'],
      github: 'https://github.com/Mr-Lucas-m/AjusteFAST',
      live: 'https://example.com'
    }
    // ,
    // {
    //   title: 'Weather Dashboard',
    //   description: 'Dashboard interativo com previsões climáticas e visualizações de dados meteorológicos.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'D3.js', 'Weather API'],
    //   github: 'https://github.com',
    //   live: ' '
    // },
    // {
    //   title: 'Social Media Analytics',
    //   description: 'Ferramenta de análise de mídias sociais com relatórios detalhados e insights automatizados.',
    //   image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Python', 'Django', 'Chart.js'],
    //   github: 'https://github.com',
    //   live: 'https://example.com'
    // },
    // {
    //   title: 'Real Estate Platform',
    //   description: 'Plataforma imobiliária com sistema de busca avançada e tours virtuais.',
    //   image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Next.js', 'PostgreSQL', 'AWS'],
    //   github: 'https://github.com',
    //   live: 'https://example.com'
    // },
    // {
    //   title: 'Learning Management System',
    //   description: 'Sistema completo de gestão de aprendizagem com vídeos, quizzes e certificações.',
    //   image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Express', 'MySQL'],
    //   github: 'https://github.com',
    //   live: 'https://example.com'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 leading-relaxed">
            Seleção de projetos que demonstram minhas habilidades e experiência
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${project.featured ? 'lg:col-span-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        <Github size={20} className="text-gray-800" />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        <Eye size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={16} />
                      Código
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;