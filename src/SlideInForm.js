import React, { useState, useEffect } from 'react';

const SlideInForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000); // Show the form after 15 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here
  };

  return (
    <div
      className={`fixed bottom-0 right-0 p-4 ${showForm ? 'translate-x-0 opacity-100' : 'translate-y-full opacity-0'} transition-all duration-500 ease-in-out`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" w-70 h-100 px-20 py-6 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-20 py-6 mb-4 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SlideInForm;