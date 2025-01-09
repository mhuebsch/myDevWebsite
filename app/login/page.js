'use client';

import { useState } from 'react';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (which triggers a GET request)

    const response = await fetch('/api/validate-password', {
      method: 'POST', // Ensure the method is set to POST
      headers: { 'Content-Type': 'application/json' }, // Specify JSON content
      body: JSON.stringify({ password }), // Send the password in the body
    });

    if (response.ok) {
      window.location.href = '/projects/interactive-presentations';
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-black"
          />
        </label>
        <button type="submit" className="w-full bg-green-500 py-2 rounded mt-4">
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
