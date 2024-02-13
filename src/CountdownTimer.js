import React, { useEffect, useState } from 'react';
import offer from './Offer.png'
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="bg-gray-900 text-white py-16">
    <div className='flex'>
    <div>
    <img
            src={offer}
            alt="Founder"
            className="w-full h-90  rounded-3xl"
          />
    </div>
      <div className="container mx-auto text-center w-full h-full">
        <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
        <p className="text-gray-300 mb-8">Sign up now and get a special discount!</p>
        <div className="countdown-timer">
          <div className="countdown-number">
            <span className="countdown-value">{minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-number">
            <span className="countdown-value">{seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;