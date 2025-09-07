
import React from 'react';

const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          Laboratório de Bioinformática e Biologia Computacional
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light drop-shadow-md">
          Decodificando a complexidade da vida através de dados e algoritmos.
        </p>
        <button 
          onClick={scrollToAbout}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Nossa Pesquisa
        </button>
      </div>
    </section>
  );
};

export default Hero;
