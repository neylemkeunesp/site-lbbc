
import React from 'react';
import { GenomicsIcon, ProteomicsIcon, SystemsBiologyIcon, DrugDiscoveryIcon } from './icons';

interface ResearchCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-600">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ResearchAreas: React.FC = () => {
  const areas = [
    {
      icon: <GenomicsIcon />,
      title: 'Genômica Computacional',
      description: 'Análise de dados de sequenciamento de nova geração (NGS) para identificação de variantes, montagem de genomas e estudos de genômica comparativa.'
    },
    {
      icon: <ProteomicsIcon />,
      title: 'Proteômica e Metagenômica',
      description: 'Estudo em larga escala de proteínas e comunidades microbianas, identificando funções e interações moleculares em sistemas complexos.'
    },
    {
      icon: <SystemsBiologyIcon />,
      title: 'Biologia de Sistemas',
      description: 'Modelagem de redes biológicas e vias metabólicas para entender a dinâmica de sistemas biológicos e prever respostas a perturbações.'
    },
    {
      icon: <DrugDiscoveryIcon />,
      title: 'Desenvolvimento de Fármacos',
      description: 'Utilização de docking molecular, triagem virtual e QSAR para identificar e otimizar compostos líderes no desenvolvimento de novos medicamentos.'
    }
  ];

  return (
    <section id="research" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Áreas de Pesquisa</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Nossas principais linhas de pesquisa integram biologia, computação e estatística para resolver problemas complexos.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <ResearchCard key={index} icon={area.icon} title={area.title} description={area.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
