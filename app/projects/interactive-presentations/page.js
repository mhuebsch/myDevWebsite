'use client';

import { useState } from 'react';
import Link from 'next/link';

// Server-Side Rendering for Authentication
export async function getServerSideProps(context) {
  const { req } = context;

  // Check for authentication cookie
  const isAuthenticated = req.cookies.authenticated === 'true';

  return {
    props: {
      isAuthenticated, // Pass authentication status to the page
    },
  };
}

const InteractivePresentationsPage = ({ isAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/validate-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white shadow-md rounded-md"
        >
          <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded mt-4"
          >
            Submit
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    );
  }

  // Content for authenticated users
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
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
            They are all fully custom with various integrations and
            interactivity to meet each client's needs. Below are just some
            examples of my favorites, as I built hundreds of these during my
            first years at Sportsdigita.
          </p>
        </div>

        <Section>
          <div className="w-full p-6 sm:p-12">
            <h2 className="text-3xl font-bold text-green-700">Hailey Sault</h2>
            <p className="my-8 text-lg">
              Hailey Sault (hay-lee-soo) is a marketing agency with expertise
              focused on health care.
            </p>
            <Link
              href="https://haileysault.com/"
              target="_blank"
              className="text-green-300 hover:text-sky-400 ext-nav-link"
            >
              Visit Hailey Sault
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ children }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full py-10">
    {children}
  </div>
);

export default InteractivePresentationsPage;
