import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-sage-green text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-white-0 text-2xl mb-8">Sign up now and get a special discount!</p>
        <button className="bg-royal-yellow hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;