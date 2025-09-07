
import React from 'react';
import { EmailIcon, LocationIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Entre em Contato</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Estamos abertos a colaborações, perguntas e novas oportunidades.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/600/400?random=7" alt="Laboratório" className="rounded-lg w-full h-auto object-cover"/>
            </div>
            <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">LBBC</h3>
                <div className="flex items-start text-lg">
                    <LocationIcon />
                    <p className="text-gray-600">
                        Av. da Universidade, 2853 <br/>
                        Campus do Pici, Bloco 909 <br/>
                        Fortaleza, CE, 60440-900, Brasil
                    </p>
                </div>
                <div className="flex items-center text-lg">
                    <EmailIcon />
                    <a href="mailto:contato@lbbc.br" className="text-blue-600 hover:underline">
                        contato@lbbc.br
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
