// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaUserPlus, FaEye, FaEyeSlash } from 'react-icons/fa6';
// import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io5';

// const SignupForm = ({
//   isLogin,
//   ACCENT,
//   loading,
//   formSwitch,
//   staggerWrap,
//   staggerItem,
//   signupForm,
//   setSignupForm,
//   onSignup,
//   onSwitchToLogin,
// }) => {
//   return (
//     <motion.form
//       custom={isLogin}
//       variants={formSwitch}
//       initial='initial'
//       animate='animate'
//       exit='exit'
//       onSubmit={onSignup}
//       className='space-y-4'
//     >
//       <div>
//         <h2 className='text-2xl font-bold text-slate-900'>Create Account</h2>
//         <p className='mt-1 text-sm text-slate-500'>
//           Join FIXIEZ today for the best repair experience.
//         </p>
//       </div>

//       <motion.div
//         variants={staggerWrap}
//         initial='hidden'
//         animate='show'
//         className='space-y-4'
//       >
//         <motion.div
//           variants={staggerItem}
//           className='grid grid-cols-1 sm:grid-cols-2 gap-4'
//         >
//           <FormInput
//             label='First Name'
//             value={signupForm.firstName}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, firstName: e.target.value }))
//             }
//             placeholder='Enter first name'
//             ACCENT={ACCENT}
//             required
//           />
//           <FormInput
//             label='Last Name'
//             value={signupForm.lastName}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, lastName: e.target.value }))
//             }
//             placeholder='Enter last name'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>

//         <motion.div variants={staggerItem}>
//           <FormInput
//             label='Email Address'
//             type='email'
//             value={signupForm.email}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, email: e.target.value }))
//             }
//             placeholder='Enter your email'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>

//         <motion.div variants={staggerItem}>
//           <FormInput
//             label='Phone Number'
//             type='tel'
//             value={signupForm.phone}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, phone: e.target.value }))
//             }
//             placeholder='Enter your phone number'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>

//         <motion.div variants={staggerItem}>
//           <FormInput
//             label='Official Address'
//             value={signupForm.address}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, address: e.target.value }))
//             }
//             placeholder='Enter your address'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>

//         <motion.div
//           variants={staggerItem}
//           className='grid grid-cols-1 sm:grid-cols-2 gap-4'
//         >
//           <FormInput
//             label='City'
//             value={signupForm.city}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, city: e.target.value }))
//             }
//             placeholder='Enter your city'
//             ACCENT={ACCENT}
//             required
//           />

//           <FormInput
//             label='Pincode'
//             maxLength={6}
//             value={signupForm.pincode}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, pincode: e.target.value }))
//             }
//             placeholder='______'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>

//         <motion.div
//           variants={staggerItem}
//           className='grid grid-cols-1 sm:grid-cols-2 gap-4'
//         >
//           <PasswordInput
//             label='Password'
//             value={signupForm.password}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, password: e.target.value }))
//             }
//             placeholder='Create a password'
//             ACCENT={ACCENT}
//             required
//           />
//           <PasswordInput
//             label='Confirm Password'
//             value={signupForm.confirmPassword}
//             onChange={(e) =>
//               setSignupForm((p) => ({ ...p, confirmPassword: e.target.value }))
//             }
//             placeholder='Confirm password'
//             ACCENT={ACCENT}
//             required
//           />
//         </motion.div>
//       </motion.div>

//       <label className='mt-2 inline-flex items-start gap-2 text-xs sm:text-sm text-slate-600 cursor-pointer select-none'>
//         <input
//           type='checkbox'
//           className='mt-1 h-4 w-4 rounded border-slate-300 cursor-pointer'
//           checked={signupForm.agree}
//           onChange={(e) =>
//             setSignupForm((p) => ({ ...p, agree: e.target.checked }))
//           }
//         />
//         <span>
//           I agree to the{' '}
//           <button
//             type='button'
//             className={`${ACCENT.text} font-medium hover:underline cursor-pointer`}
//           >
//             Terms of Service
//           </button>{' '}
//           and{' '}
//           <button
//             type='button'
//             className={`${ACCENT.text} font-medium hover:underline cursor-pointer`}
//           >
//             Privacy Policy
//           </button>
//           .
//         </span>
//       </label>

//       <motion.button
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.985 }}
//         disabled={loading}
//         type='submit'
//         className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white ${ACCENT.btn} transition disabled:opacity-70 disabled:cursor-not-allowed`}
//       >
//         <FaUserPlus className='text-sm' />
//         <span>{loading ? 'Creating...' : 'Create Account'}</span>
//       </motion.button>

//       <Divider />
//       <SocialButtons />

//       <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
//         Already have an account?{' '}
//         <button
//           type='button'
//           onClick={onSwitchToLogin}
//           className={`font-semibold ${ACCENT.text} hover:underline cursor-pointer`}
//         >
//           Sign In
//         </button>
//       </p>
//     </motion.form>
//   );
// };

// // ----- local helpers -----
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

// export default SignupForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io5';

const SignupForm = ({
  isLogin,
  ACCENT = { ring: '', btn: '', text: '' }, // Safety Default
  loading = false,
  formSwitch = {},
  staggerWrap = {},
  staggerItem = {},
  signupForm = {}, // Safety Default
  setSignupForm = () => {}, // Safety Default
  onSignup,
  onSwitchToLogin,
}) => {
  return (
    <motion.form
      custom={isLogin}
      variants={formSwitch}
      initial='initial'
      animate='animate'
      exit='exit'
      onSubmit={onSignup}
      className='space-y-4'
    >
      <div>
        <h2 className='text-2xl font-bold text-slate-900'>Create Account</h2>
        <p className='mt-1 text-sm text-slate-500'>
          Join FIXIEZ today for the best repair experience.
        </p>
      </div>

      <motion.div
        variants={staggerWrap}
        initial='hidden'
        animate='show'
        className='space-y-4'
      >
        {/* Row 1: Names */}
        <motion.div
          variants={staggerItem}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          <FormInput
            label='First Name'
            value={signupForm?.firstName || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, firstName: e.target.value }))
            }
            placeholder='Enter first name'
            ACCENT={ACCENT}
            required
          />
          <FormInput
            label='Last Name'
            value={signupForm?.lastName || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, lastName: e.target.value }))
            }
            placeholder='Enter last name'
            ACCENT={ACCENT}
            required
          />
        </motion.div>

        {/* Row 2: Contact */}
        <motion.div
          variants={staggerItem}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          <FormInput
            label='Email Address'
            type='email'
            value={signupForm?.email || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, email: e.target.value }))
            }
            placeholder='Enter your email'
            ACCENT={ACCENT}
            required
          />
          <FormInput
            label='Phone Number'
            type='tel'
            value={signupForm?.phone || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, phone: e.target.value }))
            }
            placeholder='Phone number'
            ACCENT={ACCENT}
            required
          />
        </motion.div>

        {/* Row 3: Address */}
        <motion.div variants={staggerItem}>
          <FormInput
            label='Official Address'
            value={signupForm?.address || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, address: e.target.value }))
            }
            placeholder='Enter your address'
            ACCENT={ACCENT}
            required
          />
        </motion.div>

        {/* Row 4: City/Pincode */}
        <motion.div
          variants={staggerItem}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          <FormInput
            label='City'
            value={signupForm?.city || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, city: e.target.value }))
            }
            placeholder='Enter your city'
            ACCENT={ACCENT}
            required
          />

          <FormInput
            label='Pincode'
            maxLength={6}
            value={signupForm?.pincode || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, pincode: e.target.value }))
            }
            placeholder='______'
            ACCENT={ACCENT}
            required
          />
        </motion.div>

        {/* Row 5: Passwords */}
        <motion.div
          variants={staggerItem}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          <PasswordInput
            label='Password'
            value={signupForm?.password || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, password: e.target.value }))
            }
            placeholder='Create password'
            ACCENT={ACCENT}
            required
          />
          <PasswordInput
            label='Confirm Password'
            value={signupForm?.confirmPassword || ''}
            onChange={(e) =>
              setSignupForm((p) => ({ ...p, confirmPassword: e.target.value }))
            }
            placeholder='Confirm password'
            ACCENT={ACCENT}
            required
          />
        </motion.div>
      </motion.div>

      {/* Terms checkbox */}
      <label className='mt-2 inline-flex items-start gap-2 text-xs sm:text-sm text-slate-600 cursor-pointer select-none'>
        <input
          type='checkbox'
          className='mt-1 h-4 w-4 rounded border-slate-300 cursor-pointer'
          checked={signupForm?.agree || false}
          onChange={(e) =>
            setSignupForm((p) => ({ ...p, agree: e.target.checked }))
          }
        />
        <span>
          I agree to the{' '}
          <button
            type='button'
            className={`${
              ACCENT?.text || 'text-blue-600'
            } font-medium hover:underline cursor-pointer`}
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            type='button'
            className={`${
              ACCENT?.text || 'text-blue-600'
            } font-medium hover:underline cursor-pointer`}
          >
            Privacy Policy
          </button>
        </span>
      </label>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        disabled={loading}
        type='submit'
        className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white ${
          ACCENT?.btn || 'bg-blue-600'
        } transition disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        <FaUserPlus className='text-sm' />
        <span>{loading ? 'Creating...' : 'Create Account'}</span>
      </motion.button>

      <Divider />
      <SocialButtons />

      <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
        Already have an account?{' '}
        <button
          type='button'
          onClick={onSwitchToLogin}
          className={`font-semibold ${
            ACCENT?.text || 'text-blue-600'
          } hover:underline cursor-pointer`}
        >
          Sign In
        </button>
      </p>
    </motion.form>
  );
};

// ----- Local helpers -----
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
          {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
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
    <button
      type='button'
      className='cursor-pointer w-full rounded-xl border border-slate-300 bg-white py-2 text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition'
    >
      <IoLogoGoogle className='text-red-500' /> Google
    </button>
    <button
      type='button'
      className='cursor-pointer w-full rounded-xl border border-slate-300 bg-white py-2 text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition'
    >
      <IoLogoFacebook className='text-blue-600' /> Facebook
    </button>
  </div>
);

export default SignupForm;
