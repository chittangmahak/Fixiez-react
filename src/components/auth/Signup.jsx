import React from 'react';

export default function Signup() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-[#0d061f] p-4'>
      {/* Main Container */}
      <div className='bg-white w-full max-w-6xl min-h-[90vh] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2'>
        {/* Left Section */}
        <div className='bg-gradient-to-b from-[#7A00FF] to-[#5200CC] text-white p-10 flex flex-col justify-center'>
          <h1 className='text-3xl font-bold mb-4'>Welcome to FIXIEZ</h1>
          <p className='text-sm opacity-90 mb-8'>
            Your trusted partner for device repair parts, tools, and services.
            Join our community of repair professionals and DIY enthusiasts.
          </p>

          <ul className='space-y-4 text-sm'>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                ✓
              </span>
              Secure & Trusted Platform
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                ✓
              </span>
              Fast Delivery Across India
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                ✓
              </span>
              Professional Repair Tools & Parts
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                ✓
              </span>
              24/7 Customer Support
            </li>
          </ul>
        </div>

        {/* Right Section - Signup Form */}
        <div className='p-10 overflow-y-auto'>
          <h2 className='text-2xl font-bold mb-6'>Create Account</h2>

          <form className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='First Name'
                className='input-box'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='input-box'
              />
            </div>

            <input
              type='email'
              placeholder='Email Address'
              className='input-box'
            />
            <input
              type='number'
              placeholder='Phone Number'
              className='input-box'
            />
            <input
              type='text'
              placeholder='Official Address'
              className='input-box'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input type='text' placeholder='City' className='input-box' />
              <input type='text' placeholder='Pincode' className='input-box' />
            </div>

            <input
              type='text'
              placeholder='IMEI Number (Optional)'
              className='input-box'
            />

            <input
              type='password'
              placeholder='Create a password'
              className='input-box'
            />
            <input
              type='password'
              placeholder='Confirm password'
              className='input-box'
            />

            <div className='flex items-center gap-2 text-sm'>
              <input type='checkbox' />
              <span>
                I agree to the{' '}
                <a className='text-blue-600' href='#'>
                  Terms of Service
                </a>{' '}
                and
                <a className='text-blue-600 ml-1' href='#'>
                  Privacy Policy
                </a>
              </span>
            </div>

            <button className='w-full bg-[#7A00FF] hover:bg-[#5d00c7] text-white font-semibold py-2 rounded-lg transition'>
              Create Account
            </button>
          </form>

          <div className='my-4 text-center text-sm opacity-70'>
            Or continue with
          </div>

          <div className='flex items-center justify-center gap-4'>
            <button className='border rounded-lg px-4 py-2 w-full flex items-center justify-center gap-2 text-sm'>
              <span>🔵</span> Google
            </button>
            <button className='border rounded-lg px-4 py-2 w-full flex items-center justify-center gap-2 text-sm'>
              <span>🔵</span> Facebook
            </button>
          </div>

          <div className='text-center mt-4 text-sm'>
            Already have an account?{' '}
            <a href='#' className='text-blue-600'>
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Tailwind Custom Classes */
