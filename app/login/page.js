'use client';

import { useState } from 'react';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting password:', password); // Log the password being submitted
  
    try {
      const response = await fetch('/api/validate-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
  
      console.log('Response status:', response.status);
  
      if (response.ok) {
        console.log('Password validated. Redirecting...');
        window.location.href = '/projects/interactive-presentations';
      } else {
        console.log('Invalid password');
        setError('Invalid password');
      }
    } catch (error) {
      console.error('Error submitting password:', error);
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
