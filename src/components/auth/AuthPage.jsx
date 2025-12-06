import React, { useState } from 'react';

const AuthPage = () => {
  const [mode, setMode] = useState('login'); // "login" | "signup"
  const isLogin = mode === 'login';

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8'>
      <div className='max-w-6xl w-full rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden backdrop-blur'>
        <div className='grid md:grid-cols-2'>
          {/* LEFT HERO */}
          <div className='relative hidden md:flex flex-col justify-between bg-gradient-to-br from-[#7B2CFF] via-[#8C3BFF] to-[#FF4FD8] text-white p-10 lg:p-12'>
            <div className='pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]' />
            <div className='relative z-10 space-y-12'>
              {/* Logo */}
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10'>
                  <div className='h-6 w-3 rounded-xl border-2 border-white/80 relative'>
                    <div className='w-2 h-[2px] bg-white absolute top-1 left-1/2 -translate-x-1/2 rounded-full' />
                    <div className='w-1 h-1 bg-white/80 absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full' />
                  </div>
                </div>
                <span className='text-2xl font-semibold tracking-wide'>
                  FIXIEZ
                </span>
              </div>

              <div>
                <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
                  Welcome to <span className='text-white/90'>FIXIEZ</span>
                </h1>
                <p className='mt-4 text-sm lg:text-base text-white/80 max-w-md'>
                  Your trusted partner for device repair parts, tools, and
                  services. Join our community of repair professionals and DIY
                  enthusiasts.
                </p>
              </div>

              <ul className='space-y-4 text-sm'>
                <Feature
                  title='Secure & Trusted Platform'
                  text='Safe checkout, verified sellers, and protected payments.'
                  icon='shield'
                />
                <Feature
                  title='Fast Delivery Across India'
                  text='Same-day dispatch for most orders placed before 5 PM.'
                  icon='truck'
                />
                <Feature
                  title='Professional Repair Tools & Parts'
                  text='OEM-grade components and shop-ready repair tools.'
                  icon='tools'
                />
                <Feature
                  title='24/7 Customer Support'
                  text='We’re here whenever you need help with orders or repairs.'
                  icon='headset'
                />
              </ul>
            </div>

            <div className='relative z-10 mt-8 text-xs text-white/70'>
              Powered by FIXIEZ • Because every device deserves a second life.
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className='relative bg-white px-6 py-7 sm:px-10 sm:py-10'>
            {/* Tabs */}
            <div className='flex mb-8 bg-slate-100 rounded-full p-1 text-sm font-medium'>
              <button
                type='button'
                onClick={() => setMode('login')}
                className={`flex-1 py-2 rounded-full transition-all ${
                  isLogin
                    ? 'bg-gradient-to-r from-[#7B2CFF] to-[#FF4FD8] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Login
              </button>
              <button
                type='button'
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 rounded-full transition-all ${
                  !isLogin
                    ? 'bg-gradient-to-r from-[#7B2CFF] to-[#FF4FD8] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* forms wrapper so absolute works */}
            <div className='relative min-h-[420px]'>
              {/* LOGIN FORM */}
              <form
                className={`space-y-5 transition-opacity duration-200 ${
                  isLogin
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none absolute inset-0'
                }`}
              >
                <div>
                  <h2 className='text-2xl font-semibold text-slate-900'>
                    Welcome Back
                  </h2>
                  <p className='mt-1 text-sm text-slate-500'>
                    Sign in to your FIXIEZ account.
                  </p>
                </div>

                <FormInput
                  label='Email Address'
                  type='email'
                  placeholder='Enter your email'
                />
                <PasswordInput
                  label='Password'
                  placeholder='Enter your password'
                />

                <div className='flex items-center justify-between text-xs sm:text-sm'>
                  <label className='inline-flex items-center gap-2 text-slate-600'>
                    <input
                      type='checkbox'
                      className='h-4 w-4 rounded border-slate-300 text-[#7B2CFF] focus:ring-[#7B2CFF]'
                    />
                    Remember me
                  </label>
                  <button
                    type='button'
                    className='text-[#7B2CFF] hover:underline'
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 bg-gradient-to-r from-[#7B2CFF] to-[#FF4FD8] hover:brightness-110 transition'
                >
                  <span className='text-lg'>↪</span>
                  <span>Sign In</span>
                </button>

                <Divider />

                <SocialButtons />

                <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
                  Don’t have an account?{' '}
                  <button
                    type='button'
                    onClick={() => setMode('signup')}
                    className='font-semibold text-[#7B2CFF] hover:underline'
                  >
                    Sign Up
                  </button>
                </p>
              </form>

              {/* SIGNUP FORM */}
              <form
                className={`space-y-5 transition-opacity duration-200 ${
                  !isLogin
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none absolute inset-0'
                }`}
              >
                <div>
                  <h2 className='text-2xl font-semibold text-slate-900'>
                    Create Account
                  </h2>
                  <p className='mt-1 text-sm text-slate-500'>
                    Join FIXIEZ today for the best repair experience.
                  </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <FormInput
                    label='First Name'
                    placeholder='Enter first name'
                  />
                  <FormInput label='Last Name' placeholder='Enter last name' />
                </div>

                <FormInput
                  label='Email Address'
                  type='email'
                  placeholder='Enter your email'
                />
                <FormInput
                  label='Phone Number'
                  type='tel'
                  placeholder='Enter your phone number'
                />

                <FormInput
                  label='Official Address'
                  placeholder='Enter your address'
                />

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <FormInput label='City' placeholder='Enter your city' />
                  <FormInput
                    label='Pincode'
                    placeholder='______'
                    maxLength={6}
                  />
                </div>

                <FormInput
                  label={
                    <>
                      IMEI Number{' '}
                      <span className='text-xs text-slate-400'>(Optional)</span>
                    </>
                  }
                  placeholder='Enter device IMEI (optional)'
                />

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <PasswordInput
                    label='Password'
                    placeholder='Create a password'
                  />
                  <PasswordInput
                    label='Confirm Password'
                    placeholder='Confirm password'
                  />
                </div>

                <label className='mt-2 inline-flex items-start gap-2 text-xs sm:text-sm text-slate-600'>
                  <input
                    type='checkbox'
                    className='mt-1 h-4 w-4 rounded border-slate-300 text-[#7B2CFF] focus:ring-[#7B2CFF]'
                    required
                  />
                  <span>
                    I agree to the{' '}
                    <button
                      type='button'
                      className='text-[#7B2CFF] hover:underline'
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button
                      type='button'
                      className='text-[#7B2CFF] hover:underline'
                    >
                      Privacy Policy
                    </button>
                    .
                  </span>
                </label>

                <button
                  type='submit'
                  className='mt-1 w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 bg-gradient-to-r from-[#7B2CFF] to-[#FF4FD8] hover:brightness-110 transition'
                >
                  <span className='text-lg'>✚</span>
                  <span>Create Account</span>
                </button>

                <Divider />

                <SocialButtons />

                <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
                  Already have an account?{' '}
                  <button
                    type='button'
                    onClick={() => setMode('login')}
                    className='font-semibold text-[#7B2CFF] hover:underline'
                  >
                    Sign In
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------- reusable sub-components ------- */

const FormInput = ({ label, ...props }) => (
  <div className='space-y-1.5'>
    <label className='text-xs sm:text-sm font-medium text-slate-700'>
      {label}
    </label>
    <input
      className='w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#7B2CFF] focus:ring-2 focus:ring-[#7B2CFF]/40 transition'
      {...props}
    />
  </div>
);

const PasswordInput = ({ label, placeholder }) => (
  <div className='space-y-1.5'>
    <label className='text-xs sm:text-sm font-medium text-slate-700'>
      {label}
    </label>
    <div className='relative'>
      <input
        type='password'
        placeholder={placeholder}
        className='w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 pr-10 text-sm text-slate-900 outline-none focus:border-[#7B2CFF] focus:ring-2 focus:ring-[#7B2CFF]/40 transition'
      />
      <span className='absolute inset-y-0 right-3 flex items-center text-slate-400 text-xs'>
        👁
      </span>
    </div>
  </div>
);

const Divider = () => (
  <div className='flex items-center gap-3 mt-2'>
    <span className='h-px flex-1 bg-slate-200' />
    <span className='text-[11px] uppercase tracking-[0.15em] text-slate-400'>
      Or continue with
    </span>
    <span className='h-px flex-1 bg-slate-200' />
  </div>
);

const SocialButtons = () => (
  <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3'>
    <button
      type='button'
      className='w-full rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition'
    >
      <span className='text-lg'>G</span>
      <span>Google</span>
    </button>
    <button
      type='button'
      className='w-full rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition'
    >
      <span className='text-lg text-[#1877F2]'>f</span>
      <span>Facebook</span>
    </button>
  </div>
);

const Feature = ({ title, text, icon }) => {
  const iconMap = {
    shield: '🛡️',
    truck: '🚚',
    tools: '🛠️',
    headset: '🎧',
  };

  return (
    <li className='flex gap-3'>
      <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15'>
        <span className='text-lg'>{iconMap[icon] || '•'}</span>
      </div>
      <div>
        <p className='text-sm font-semibold'>{title}</p>
        <p className='text-xs text-white/80'>{text}</p>
      </div>
    </li>
  );
};

export default AuthPage;
