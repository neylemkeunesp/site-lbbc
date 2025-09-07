
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Sobre o LBBC</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-700 mb-4">Nossa Missão</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No LBBC, nossa missão é avançar as fronteiras do conhecimento biológico através da aplicação de métodos computacionais de ponta. Buscamos desenvolver e utilizar ferramentas de bioinformática para analisar dados genômicos, proteômicos e transcriptômicos, visando compreender os mecanismos moleculares subjacentes à saúde e à doença.
            </p>
            <h3 className="text-3xl font-semibold text-gray-700 mb-4">Nossa Visão</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aspiramos ser um centro de referência em bioinformática, reconhecido pela excelência em pesquisa, inovação e formação de recursos humanos. Queremos fomentar um ambiente colaborativo que traduza descobertas computacionais em aplicações biomédicas tangíveis, impactando positivamente a sociedade.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md">
                <img src="https://picsum.photos/600/600?random=2" alt="Equipe de pesquisa em colaboração" className="rounded-lg shadow-2xl w-full h-auto z-10 relative"/>
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-blue-100 rounded-full"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
