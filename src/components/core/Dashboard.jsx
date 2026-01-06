// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className='flex flex-col justify-center items-center text-2xl'>
//       <h1>Dashboard</h1>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import axiosInstance from '../../api/axios';

const Dashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSendCode = async () => {
    if (!phoneNumber) {
      alert('Please enter a phone number');
      return;
    }

    setLoading(true);
    setStatus('Sending...');

    try {
      const response = await axiosInstance.post('/whatsapp/send-otp', {
        phoneNumber: phoneNumber, // Format: 91XXXXXXXXXX (Country code + number)
      });

      if (response.data.success) {
        setStatus('Code sent successfully to WhatsApp!');
      } else {
        setStatus('Failed to send code.');
      }
    } catch (error) {
      console.error('Error sending code:', error);
      setStatus('Error: Could not reach the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-6 bg-gray-50'>
      <h1 className='text-3xl font-bold'>WhatsApp OTP Tester</h1>

      <div className='flex flex-col gap-4 p-8 bg-white shadow-lg rounded-xl'>
        <label className='text-sm font-medium text-gray-600'>
          Phone Number (with country code)
        </label>
        <input
          type='text'
          placeholder='e.g. 919876543210'
          className='border-2 border-gray-200 p-2 rounded-lg text-lg focus:border-green-500 outline-none transition-all'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button
          onClick={handleSendCode}
          disabled={loading}
          className={`${
            loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
          } text-white font-bold py-2 px-6 rounded-lg transition-colors text-lg`}
        >
          {loading ? 'Processing...' : 'Send Code via WhatsApp'}
        </button>

        {status && (
          <p
            className={`text-sm mt-2 font-semibold ${
              status.includes('Error') ? 'text-red-500' : 'text-green-600'
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
