import React from 'react';
import HeroSection from './HeroSection';
import AboutFounderSection from './AboutFounderSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import CountdownTimer from './CountdownTimer';
import CTASection from './CTASection';
import SlideInForm from './SlideInForm'; 



const App = () => {
  return (
    <>
    <div className='font-sans bg-sage-green '>
    
      <HeroSection/>
      <AboutFounderSection/>
      <CountdownTimer/>
      <WhyChooseUsSection/>
      <CTASection/>
      <SlideInForm/>
     </div>
      
      
      
    </>
  );
};

export default App;
