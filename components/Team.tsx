
import React from 'react';

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, name, role }) => {
  return (
    <div className="text-center group">
      <div className="relative inline-block mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
        />
        <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-300 transition-all duration-300 transform scale-105 group-hover:scale-110"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-blue-600 font-semibold">{role}</p>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    { name: 'Dr. Ana Silva', role: 'Pesquisadora Principal', imageUrl: 'https://picsum.photos/200/200?random=3' },
    { name: 'Dr. Carlos Pereira', role: 'Pesquisador Sênior', imageUrl: 'https://picsum.photos/200/200?random=4' },
    { name: 'Mariana Costa', role: 'Aluna de Doutorado', imageUrl: 'https://picsum.photos/200/200?random=5' },
    { name: 'João Santos', role: 'Aluno de Mestrado', imageUrl: 'https://picsum.photos/200/200?random=6' },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Nossa Equipe</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Conheça os pesquisadores e estudantes que impulsionam nossas descobertas.</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
