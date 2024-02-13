import React from 'react';

const Hero = () => {
  return (
    <section className="bg-sage-green py-16 text-center text-white">
      <div className="container mx-auto font-sans">
        <h1 className="text-5xl font-bold tracking-widest mb-8">
          Welcome to FounderX
        </h1>
        <p className="text-xl mb-16">
          Master a structured approach to building a tech venture. Get coached by India's top 1% founders, operators and investors. Learn by doing - Work on actual startup ideas in a real-world startup team simulation. Expand your network in the community of like-minded peers. Find your co-founder & your core team among the fellows and alumni.
        </p>
        <button className="bg-royal-yellow hover:bg-red-500 text-white font-bold py-4 px-8 rounded shadow">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Hero;