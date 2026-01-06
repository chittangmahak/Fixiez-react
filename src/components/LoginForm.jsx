// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa6';
// import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io5';

// const LoginForm = ({
//   isLogin,
//   ACCENT,
//   loading,
//   formSwitch,
//   staggerWrap,
//   staggerItem,
//   loginForm,
//   setLoginForm,
//   onLogin,
//   onSwitchToSignup,
// }) => {
//   return (
//     <motion.form
//       custom={isLogin}
//       variants={formSwitch}
//       initial='initial'
//       animate='animate'
//       exit='exit'
//       onSubmit={onLogin}
//       className='space-y-5'
//     >
//       <div>
//         <h2 className='text-2xl font-bold text-slate-900'>Welcome Back</h2>
//         <p className='mt-1 text-sm text-slate-500'>
//           Sign in to your FIXIEZ account.
//         </p>
//       </div>

//       <motion.div
//         variants={staggerWrap}
//         initial='hidden'
//         animate='show'
//         className='space-y-4'
//       >
//         <motion.div variants={staggerItem}>
//           <FormInput
//             label='Email Address'
//             type='email'
//             value={loginForm?.email || ''}
//             onChange={(e) =>
//               setLoginForm((p) => ({ ...p, email: e.target.value }))
//             }
//             placeholder='Enter your email'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>

//         <motion.div variants={staggerItem}>
//           <PasswordInput
//             label='Password'
//             value={loginForm?.password || ''}
//             onChange={(e) =>
//               setLoginForm((p) => ({ ...p, password: e.target.value }))
//             }
//             placeholder='Enter your password'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>
//       </motion.div>

//       <div className='flex items-center justify-between text-xs sm:text-sm'>
//         <label className='inline-flex items-center gap-2 text-slate-600 cursor-pointer select-none'>
//           <input
//             type='checkbox'
//             className='h-4 w-4 rounded border-slate-300 cursor-pointer'
//           />
//           Remember me
//         </label>

//         <button
//           type='button'
//           className={`${ACCENT.text} font-medium hover:underline cursor-pointer`}
//         >
//           Forgot Password?
//         </button>
//       </div>

//       <motion.button
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.985 }}
//         disabled={loading}
//         type='submit'
//         className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white ${ACCENT.btn} transition disabled:opacity-70 disabled:cursor-not-allowed`}
//       >
//         <FaArrowRight className='text-sm' />
//         <span>{loading ? 'Signing In...' : 'Sign In'}</span>
//       </motion.button>

//       <Divider />
//       <SocialButtons />

//       <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
//         Don’t have an account?{' '}
//         <button
//           type='button'
//           onClick={onSwitchToSignup}
//           className={`font-semibold ${ACCENT.text} hover:underline cursor-pointer`}
//         >
//           Sign Up
//         </button>
//       </p>
//     </motion.form>
//   );
// };

// // ----- local helpers (kept inside the form file) -----
// const FormInput = ({ label, ACCENT, className = '', ...props }) => (
//   <div className={`space-y-1.5 ${className}`}>
//     <label className='text-xs sm:text-sm font-medium text-slate-700'>
//       {label}
//     </label>
//     <input
//       className={`w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#007bff] focus:ring-2 ${ACCENT.ring} transition duration-150`}
//       {...props}
//     />
//   </div>
// );

// const PasswordInput = ({ label, placeholder, value, onChange, ACCENT }) => {
//   const [show, setShow] = useState(false);

//   return (
//     <div className='space-y-1.5'>
//       <label className='text-xs sm:text-sm font-medium text-slate-700'>
//         {label}
//       </label>
//       <div className='relative'>
//         <input
//           type={show ? 'text' : 'password'}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className={`w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-900 outline-none focus:border-[#007bff] focus:ring-2 ${ACCENT.ring} transition duration-150`}
//         />
//         <button
//           type='button'
//           onClick={() => setShow((p) => !p)}
//           className='cursor-pointer absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-800 transition'
//           aria-label={show ? 'Hide password' : 'Show password'}
//         >
//           <motion.div whileTap={{ scale: 0.9 }}>
//             {show ? (
//               <FaEyeSlash className='text-base' />
//             ) : (
//               <FaEye className='text-base' />
//             )}
//           </motion.div>
//         </button>
//       </div>
//     </div>
//   );
// };

// const Divider = () => (
//   <div className='flex items-center gap-3 mt-4'>
//     <span className='h-px flex-1 bg-slate-200' />
//     <span className='text-[11px] uppercase tracking-[0.15em] text-slate-400 font-medium'>
//       Or continue with
//     </span>
//     <span className='h-px flex-1 bg-slate-200' />
//   </div>
// );

// const SocialButtons = () => (
//   <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3'>
//     <motion.button
//       whileHover={{ scale: 1.01 }}
//       whileTap={{ scale: 0.98 }}
//       type='button'
//       className='cursor-pointer w-full rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition'
//     >
//       <IoLogoGoogle className='text-lg text-red-500' />
//       <span>Google</span>
//     </motion.button>
//     <motion.button
//       whileHover={{ scale: 1.01 }}
//       whileTap={{ scale: 0.98 }}
//       type='button'
//       className='cursor-pointer w-full rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition'
//     >
//       <IoLogoFacebook className='text-lg text-[#1877F2]' />
//       <span>Facebook</span>
//     </motion.button>
//   </div>
// );

// export default LoginForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io5';

const LoginForm = ({
  isLogin,
  // Provide default empty objects to prevent "undefined" errors
  ACCENT = { ring: '', btn: '', text: '' },
  loading = false,
  formSwitch = {},
  staggerWrap = {},
  staggerItem = {},
  loginForm = { email: '', password: '' },
  setLoginForm,
  onLogin,
  onSwitchToSignup,
}) => {
  return (
    <motion.form
      custom={isLogin}
      variants={formSwitch}
      initial='initial'
      animate='animate'
      exit='exit'
      onSubmit={onLogin}
      className='space-y-5'
    >
      <div>
        <h2 className='text-2xl font-bold text-slate-900'>Welcome Back</h2>
        <p className='mt-1 text-sm text-slate-500'>
          Sign in to your FIXIEZ account.
        </p>
      </div>

      <motion.div
        variants={staggerWrap}
        initial='hidden'
        animate='show'
        className='space-y-4'
      >
        <motion.div variants={staggerItem}>
          <FormInput
            label='Email Address'
            type='email'
            // Added optional chaining ?.
            value={loginForm?.email || ''}
            onChange={(e) =>
              setLoginForm((p) => ({ ...p, email: e.target.value }))
            }
            placeholder='Enter your email'
            ACCENT={ACCENT}
            required
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <PasswordInput
            label='Password'
            // Added optional chaining ?.
            value={loginForm?.password || ''}
            onChange={(e) =>
              setLoginForm((p) => ({ ...p, password: e.target.value }))
            }
            placeholder='Enter your password'
            ACCENT={ACCENT}
            required
          />
        </motion.div>
      </motion.div>

      <div className='flex items-center justify-between text-xs sm:text-sm'>
        <label className='inline-flex items-center gap-2 text-slate-600 cursor-pointer select-none'>
          <input
            type='checkbox'
            className='h-4 w-4 rounded border-slate-300 cursor-pointer'
          />
          Remember me
        </label>

        <button
          type='button'
          // Safely access ACCENT.text
          className={`${
            ACCENT?.text || 'text-blue-600'
          } font-medium hover:underline cursor-pointer`}
        >
          Forgot Password?
        </button>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        disabled={loading}
        type='submit'
        // Safely access ACCENT.btn
        className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white ${
          ACCENT?.btn || 'bg-blue-600'
        } transition disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        <FaArrowRight className='text-sm' />
        <span>{loading ? 'Signing In...' : 'Sign In'}</span>
      </motion.button>

      <Divider />
      <SocialButtons />

      <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
        Don’t have an account?{' '}
        <button
          type='button'
          onClick={onSwitchToSignup}
          // Safely access ACCENT.text
          className={`font-semibold ${
            ACCENT?.text || 'text-blue-600'
          } hover:underline cursor-pointer`}
        >
          Sign Up
        </button>
      </p>
    </motion.form>
  );
};

// ----- Helper Components with Safety Guards -----

const FormInput = ({ label, ACCENT, className = '', ...props }) => (
  <div className={`space-y-1.5 ${className}`}>
    <label className='text-xs sm:text-sm font-medium text-slate-700'>
      {label}
    </label>
    <input
      className={`w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#007bff] focus:ring-2 ${
        ACCENT?.ring || 'focus:ring-blue-500/20'
      } transition duration-150`}
      {...props}
    />
  </div>
);

const PasswordInput = ({ label, placeholder, value, onChange, ACCENT }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='space-y-1.5'>
      <label className='text-xs sm:text-sm font-medium text-slate-700'>
        {label}
      </label>
      <div className='relative'>
        <input
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          className={`w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-900 outline-none focus:border-[#007bff] focus:ring-2 ${
            ACCENT?.ring || 'focus:ring-blue-500/20'
          } transition duration-150`}
        />
        <button
          type='button'
          onClick={() => setShow((p) => !p)}
          className='cursor-pointer absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-800 transition'
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </motion.div>
        </button>
      </div>
    </div>
  );
};

const Divider = () => (
  <div className='flex items-center gap-3 mt-4'>
    <span className='h-px flex-1 bg-slate-200' />
    <span className='text-[11px] uppercase tracking-[0.15em] text-slate-400 font-medium'>
      Or continue with
    </span>
    <span className='h-px flex-1 bg-slate-200' />
  </div>
);

const SocialButtons = () => (
  <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3'>
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      type='button'
      className='cursor-pointer w-full rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition'
    >
      <IoLogoGoogle className='text-lg text-red-500' />
      <span>Google</span>
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      type='button'
      className='cursor-pointer w-full rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition'
    >
      <IoLogoFacebook className='text-lg text-[#1877F2]' />
      <span>Facebook</span>
    </motion.button>
  </div>
);

export default LoginForm;
