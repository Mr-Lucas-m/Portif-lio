import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Desenvolvimento',
      description: 'Especialista em tecnologias modernas para soluções eficientes e inovadoras em Python, Golang e JavaScript'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design',
      description: 'Criação de interfaces intuitivas e experiências de usuário com bootstrap e tailwind'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Otimização de aplicações para máxima velocidade e eficiência com utilizacao de frameworks, bibliotecas modernas e utilização de plataforma de versionamento git para controle de versões e colaboração em equipe'
    },
    {
      icon: <Users size={24} />,
      title: 'Colaboração',
      description: 'Trabalho em equipe e comunicação eficaz em projetos complexos '
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 leading-relaxed">
            Desenvolvedor apaixonado por tecnologia e inovação
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Minha Jornada
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Com mais de 2 anos de experiência em desenvolvimento web, tenho me dedicado a criar 
                soluções digitais que fazem a diferença.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Acredito que a combinação de código limpo, design intuitivo e performance otimizada 
                são fundamentais para criar produtos excepcionais que superam as expectativas dos usuários.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '61%' }}></div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">UI/UX Design</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;