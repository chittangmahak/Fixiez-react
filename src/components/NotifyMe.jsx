import React from 'react';

export default function NotifyMe() {
  return (
    <div className='w-full flex items-center justify-between p-6 rounded-2xl shadow-sm border bg-white'>
      <div className='flex items-center gap-4'>
        <div className='w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-3xl'>
          🔥
        </div>
        <div>
          <h2 className='text-xl font-semibold text-gray-900'>
            Get access to exclusive deals
          </h2>
          <p className='text-gray-500 text-sm'>
            Only the best deals reach your inbox
          </p>
        </div>
      </div>

      <div className='flex items-center gap-3 w-1/2'>
        <div className='flex flex-col w-[70%]'>
          <label className='text-sm text-gray-600 mb-1'>Your email</label>
          <input
            type='email'
            placeholder='e.g., john@email.com'
            className='w-full px-4 py-3 border rounded-xl outline-none text-gray-700 focus:ring-2 focus:ring-red-400'
          />
        </div>

        <button className='mt-6 cursor-pointer px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition'>
          Notify me
        </button>
      </div>
    </div>
  );
}
