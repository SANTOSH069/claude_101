'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);

    try {
      await sendData(formData);
      alert("Data submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting data");
    }
  };

  const sendData = async (data: {
    username: string;
    password: string;
    email: string;
    phone: string;
  }) => {
    const response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    const res = await response.json();
    console.log(res);
  };

  return (
    <div className='mx-auto font-sans min-h-screen w-full bg-white p-8'>
      <h1 className='font-bold text-6xl tracking-tight mb-8 text-black'>
        Sign Up
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col max-w-md space-y-4'>
        
        <input 
          name="username" 
          type='text' 
          placeholder='Enter your Username' 
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded text-black"
          required
        />

        <input 
          name="password" 
          type='password' 
          placeholder='Enter your Password'
          minLength={6} 
          maxLength={20} 
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded text-black"
          required
        />

        <input
          name='email'
          type='email'
          placeholder='Enter your email'
          required
          value={formData.email}
          onChange={handleChange}
          pattern='[a-z0-9._%+-]+@gmail\.com$'
          className="border p-2 rounded text-black"
        />

        <input
          name='phone'
          type='tel'
          placeholder='Enter your phone Number (+91XXXXXXXXXX)'
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="\+91[0-9]{10}"
          className="border p-2 rounded text-black"
        />

        <button 
          type="submit" 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;