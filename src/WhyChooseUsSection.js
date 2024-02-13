import React from 'react';
import icon1 from './icon1.jpg';
import icon2 from './icon 2.png';
import icon3 from './icon3.png';
import icon4 from './icon 4.png';
import icon5 from './icon 5.jpg';

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Darsheel Savla's Consultancy Program?</h2>
        <div className="flex flex-wrap justify-center">
          {[
            {
              icon: icon1,
              title: 'Expertise in D2C Businesses',
              description: 'Darsheel Savla is a visionary leader with a passion for building Direct-2-Consumer businesses. With his expertise and experience, he can help you navigate the challenges of going D2C and grow your business.'
            },
            {
              icon: icon2,
              title: 'Industry Secrets',
              description: 'Darsheel has a wealth of knowledge and experience in the food industry, and he\'s eager to share his insights and secrets with you. Join his consultancy program to learn from the best and accelerate your growth.'
            },
            {
              icon: icon3,
              title: 'Personalized Guidance',
              description: 'Darsheel provides personalized guidance and coaching to help you achieve your goals. Whether you\'re just starting out or looking to scale your business, Darsheel can provide the support and guidance you need to succeed.'
            },
            {
              icon: icon4,
              title: 'Networking Opportunities',
              description: 'As a co-founder at PatilKaki, Darsheel has built a strong network of industry leaders and experts. Join his consultancy program to gain access to this network and build valuable connections.'
            },
            {
              icon: icon5,
              title: 'Proven Results',
              description: 'Darsheel has a track record of success in building and growing D2C businesses. Join his consultancy program to learn from his experience and achieve similar results for your own business.'
            }
          ].map(item => (
            <div key={item.title} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg p-6 shadow-md hover:bg-blue-200 font-normal hover:font-bold">
                <img src={item.icon} alt={item.title} className="mx-auto w-28 mb-4 hover:opacity-150" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
