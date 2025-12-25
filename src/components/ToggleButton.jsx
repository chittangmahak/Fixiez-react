import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ isLogin, setMode, ACCENT }) => {
  return (
    <div className='flex mb-6 bg-slate-100 rounded-full p-1 text-sm font-medium border border-slate-200'>
      <TabButton
        active={isLogin}
        onClick={() => setMode('login')}
        label='Login'
        ACCENT={ACCENT}
      />
      <TabButton
        active={!isLogin}
        onClick={() => setMode('signup')}
        label='Sign Up'
        ACCENT={ACCENT}
      />
    </div>
  );
};

const TabButton = ({ active, onClick, label, ACCENT }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`cursor-pointer flex-1 py-2 rounded-full font-medium relative overflow-hidden ${
        active
          ? `${ACCENT.btn} text-white`
          : 'text-slate-500 hover:text-slate-800'
      }`}
    >
      {active && (
        <motion.div
          layoutId='activeTab'
          className='absolute inset-0 bg-white/10'
          transition={{ type: 'spring', stiffness: 520, damping: 34 }}
        />
      )}
      <span className='relative z-10'>{label}</span>
    </button>
  );
};

export default ToggleButton;
