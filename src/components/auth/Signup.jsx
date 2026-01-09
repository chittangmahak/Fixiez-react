import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaWhatsapp, // Added WhatsApp icon
} from 'react-icons/fa6';

import { FaRegUser, FaUserPlus } from 'react-icons/fa';

const Signup = ({ signupForm, setSignupForm, onSignup, loading }) => {
  const updateField = (field, val) =>
    setSignupForm((prev) => ({ ...prev, [field]: val }));

  return (
    <motion.form onSubmit={onSignup} className='space-y-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <FormInput
          label='First Name'
          icon={<FaRegUser />}
          value={signupForm.firstName}
          onChange={(e) => updateField('firstName', e.target.value)}
          placeholder='John'
          required
        />
        <FormInput
          label='Last Name'
          icon={<FaRegUser />}
          value={signupForm.lastName}
          onChange={(e) => updateField('lastName', e.target.value)}
          placeholder='Doe'
          required
        />
      </div>

      <FormInput
        label='Email'
        icon={<FaEnvelope />}
        type='email'
        value={signupForm.email}
        onChange={(e) => updateField('email', e.target.value)}
        placeholder='john@example.com'
        required
      />

      {/* SPECIAL WHATSAPP HIGHLIGHTED INPUT */}
      <div className='space-y-1.5 text-left'>
        <div className='flex justify-between items-center px-1'>
          <label className='text-[10px] font-black text-slate-500 uppercase tracking-widest'>
            Phone Number
          </label>
          <span className='text-[9px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full flex items-center gap-1'>
            <FaWhatsapp size={10} /> WhatsApp Required
          </span>
        </div>
        <div className='relative group'>
          <div className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#25D366] transition-colors'>
            <FaPhone />
          </div>
          <input
            type='tel'
            value={signupForm.phone}
            onChange={(e) =>
              updateField('phone', e.target.value.replace(/\D/g, ''))
            }
            className='w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 py-2.5 text-sm outline-none focus:bg-white focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/10 transition-all placeholder:text-slate-400'
            placeholder='Enter 10-digit WhatsApp number'
            maxLength='10'
            required
          />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <PasswordInput
          label='Password'
          icon={<FaLock />}
          value={signupForm.password}
          onChange={(e) => updateField('password', e.target.value)}
          placeholder='••••••••'
          required
        />
        <PasswordInput
          label='Confirm'
          icon={<FaLock />}
          value={signupForm.confirmPassword}
          onChange={(e) => updateField('confirmPassword', e.target.value)}
          placeholder='••••••••'
          required
        />
      </div>

      <button
        type='submit'
        className='w-full flex items-center justify-center gap-2 cursor-pointer rounded-xl py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all'
      >
        <FaUserPlus size={20} /> {loading ? 'Registering...' : 'Create Account'}
      </button>
    </motion.form>
  );
};

// Re-usable Input Components
const FormInput = ({ label, icon, ...props }) => (
  <div className='space-y-1.5 text-left'>
    <label className='text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1'>
      {label}
    </label>
    <div className='relative group'>
      <div className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600'>
        {icon}
      </div>
      <input
        className='w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all'
        {...props}
      />
    </div>
  </div>
);

const PasswordInput = ({ label, icon, value, onChange, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='space-y-1.5 text-left'>
      <label className='text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1'>
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
          className='w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-11 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all'
          {...props}
        />
        <button
          type='button'
          onClick={() => setShow(!show)}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer'
        >
          {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
        </button>
      </div>
    </div>
  );
};

export default Signup;
