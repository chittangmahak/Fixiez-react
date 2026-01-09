import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from 'react-icons/fa6';

const Login = ({ loginForm, setLoginForm, onLogin, loading }) => {
  return (
    <motion.form onSubmit={onLogin} className='space-y-5'>
      <div className='space-y-4'>
        <FormInput
          label='Email Address'
          type='email'
          icon={<FaEnvelope />}
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm({ ...loginForm, email: e.target.value })
          }
          placeholder='example@gmail.com'
          required
        />
        <PasswordInput
          label='Password'
          icon={<FaLock />}
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          placeholder='••••••••'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full flex items-center justify-center gap-2 rounded-xl py-3.5 cursor-pointer text-sm font-bold text-white bg-blue-600 shadow-lg shadow-blue-200'
      >
        {loading ? 'Verifying...' : 'Sign In'} <FaArrowRight />
      </button>
    </motion.form>
  );
};

// Sub-components (FormInput, PasswordInput) stay the same as your code...
const FormInput = ({ label, icon, ...props }) => (
  <div className='space-y-1.5 text-left'>
    <label className='text-xs font-bold text-slate-700 uppercase tracking-wider ml-1'>
      {label}
    </label>
    <div className='relative group'>
      <div className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600'>
        {icon}
      </div>
      <input
        className='w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 py-3 text-sm outline-none focus:bg-white focus:border-blue-500 transition-all'
        {...props}
      />
    </div>
  </div>
);

const PasswordInput = ({ label, icon, value, onChange, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='space-y-1.5 text-left'>
      <label className='text-xs font-bold text-slate-700 uppercase tracking-wider ml-1'>
        {label}
      </label>
      <div className='relative group'>
        <div className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600'>
          {icon}
        </div>
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className='w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-11 py-3 text-sm outline-none focus:bg-white focus:border-blue-500 transition-all'
          {...props}
        />
        <button
          type='button'
          onClick={() => setShow(!show)}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer'
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default Login;
