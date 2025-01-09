'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const InteractivePresentationsPage = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = 'unlockify';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  // Conditional rendering
  if (isAuthenticated) {
    return (
      <div>
        <h1>Protected Content</h1>
        <p>This content is only visible to users with the correct password.</p>
      </div>
    );
  }

  const Section = ({ children, reverse }) => {
    return (
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center justify-between w-full py-10`}
      >
        {children}
      </div>
    );
  };

  // Main render return
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="absolute w-full h-full flex justify-center items-center bg-green-950"
      >
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 pt-24 sm:py-16">
            Interactive Presentations
          </h1>
          <p className="w-full px-8 sm:px-0 sm:w-3/5 text-center py-4">
            These presentations were built in the Digideck, Sportsdigita's
            flagship application, using JavaScript, jQuery, HTML, CSS, and
            Bootstrap.
          </p>
          <p className="w-full px-8 sm:px-0 sm:w-3/5 text-center py-4">
            They are all fully custom with varius integrations and interactivity
            to meet each client's needs. Below are just some examples of my
            favorites, as I built hundreds of these during my first years at
            Sportsdigita.
          </p>
        </div>

        <Section>
          <div className="w-full p-6 sm:p-12">
            <h2 className="text-3xl font-bold text-green-700">Hailey Sault</h2>
            <p className="my-8 text-lg">
              Hailey Sault (hay-lee-soo) is a marketing agency with expertise
              focused on health care. test
            </p>
            <Link
              href="https://haileysault.com/"
              target="_blank"
              className="text-green-300 hover:text-sky-400 ext-nav-link"
            >
              Visit Hailey Sault
            </Link>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 p-6 flex flew-col sm:flex-row justify-center">
              <img
                src="/images/desktop-hailey-sault.png"
                alt="image of hailey sault website on dekstop computer"
                className="w-auto h-auto max-h-96 object-contain"
              />
            </div>
            <div className="w-1/2 flex flew-col sm:flex-row justify-center">
              <img
                src="/images/screens-hailey-sault.png"
                alt="image of hailey sault website on different screens"
                className="w-auto h-auto max-h-96 object-contain"
              />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default InteractivePresentationsPage;
