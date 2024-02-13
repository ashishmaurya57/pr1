import React, { useState } from 'react';
import founder from './founder.png'

const AboutFounderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Our Founder</h2>
        <div className='flex'>
        <button
          className="relative inline-block rounded-full shadow-lg overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={founder}
            alt="Founder"
            className="w-full h-90  rounded-3xl"
            
          />
          
          
        
        </button>
        </div>
        {isOpen && (
          <div className="bg-white rounded shadow-lg p-8 mt-8 inline-block">
            <div className="flex">
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Darsheel Savla</h3>
                <p className="text-gray-600 mb-4">
                  Darsheel Savla, a co-founder at PatilKaki, is a charismatic and creative powerhouse who infuses his passion for food, people, and brand building into everything he does. With an unshakable drive and an insatiable appetite for culinary exploration, he's determined to bring the legendary recipes of PatilKaki to the world.
                </p>
                <p className="text-gray-600 mb-4">
                  Also, a visionary leader with a passion for building D2C businesses, Darsheel is rolling out his new consultancy programme to help fellow founders and entrepreneurs navigate the challenges of going Direct-2-Consumer. Join him in this journey to gain various insights on industry secrets and how to supercharge the pace at which you learn and grow! 🚀📈
                </p>
              </div>
            </div>
            <button
              className="bg-royal-yellow hover:bg-royal-yellow-dark text-white font-bold py-2 px-4 rounded shadow"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutFounderSection;