// import React, { useMemo, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   FaShieldHalved,
//   FaTruckFast,
//   FaWrench,
//   FaHeadset,
//   FaEye,
//   FaEyeSlash,
//   FaArrowRight,
//   FaUserPlus,
// } from 'react-icons/fa6';
// import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io5';
// import { loginApi, signupApi } from '../api/authApi';

// // ---- MOTION ----
// const pageIn = {
//   initial: { opacity: 0, y: 16 },
//   animate: { opacity: 1, y: 0 },
// };

// const formSwitch = {
//   initial: (isLogin) => ({
//     opacity: 0,
//     x: isLogin ? 30 : -30,
//     filter: 'blur(6px)',
//   }),
//   animate: {
//     opacity: 1,
//     x: 0,
//     filter: 'blur(0px)',
//     transition: { type: 'spring', stiffness: 260, damping: 24 },
//   },
//   exit: (isLogin) => ({
//     opacity: 0,
//     x: isLogin ? -30 : 30,
//     filter: 'blur(6px)',
//     transition: { duration: 0.16 },
//   }),
// };

// const staggerWrap = {
//   hidden: { opacity: 1 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.06, delayChildren: 0.08 },
//   },
// };
// const staggerItem = {
//   hidden: { opacity: 0, y: 10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: 'spring', stiffness: 240, damping: 22 },
//   },
// };

// const AuthPage = () => {
//   const [mode, setMode] = useState('login');
//   const isLogin = mode === 'login';

//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState('');

//   const [loginForm, setLoginForm] = useState({ email: '', password: '' });
//   const [signupForm, setSignupForm] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     pincode: '',
//     password: '',
//     confirmPassword: '',
//     agree: false,
//   });

//   const ACCENT = useMemo(
//     () => ({
//       ring: 'focus:ring-[#007bff]/35',
//       btn: 'bg-[#007bff] hover:bg-[#0b63d1] shadow-lg shadow-blue-500/30',
//       text: 'text-[#007bff]',
//       hero: 'from-blue-600 via-indigo-600 to-fuchsia-600',
//     }),
//     []
//   );

//   const onLogin = async (e) => {
//     e.preventDefault();
//     setErr('');
//     try {
//       setLoading(true);
//       const res = await loginApi(loginForm);

//       // If backend returns token (JWT) - optional
//       if (res?.token) localStorage.setItem('token', res.token);

//       // do navigation if needed:
//       // navigate("/dashboard");
//       console.log('login success:', res);
//     } catch (error) {
//       setErr(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onSignup = async (e) => {
//     e.preventDefault();
//     setErr('');

//     if (signupForm.password !== signupForm.confirmPassword) {
//       setErr('Passwords do not match.');
//       return;
//     }
//     if (!signupForm.agree) {
//       setErr('Please accept Terms & Privacy Policy.');
//       return;
//     }

//     try {
//       setLoading(true);
//       const payload = {
//         firstName: signupForm.firstName,
//         lastName: signupForm.lastName,
//         email: signupForm.email,
//         phone: signupForm.phone,
//         address: signupForm.address,
//         city: signupForm.city,
//         pincode: signupForm.pincode,
//         password: signupForm.password,
//       };
//       const res = await signupApi(payload);
//       console.log('signup success:', res);

//       // After signup, switch to login for better UX:
//       setMode('login');
//       setLoginForm((p) => ({ ...p, email: signupForm.email, password: '' }));
//     } catch (error) {
//       setErr(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8'>
//       <motion.div
//         variants={pageIn}
//         initial='initial'
//         animate='animate'
//         transition={{ duration: 0.45, ease: 'easeOut' }}
//         className='max-w-6xl w-full rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-lg'
//       >
//         <div className='grid md:grid-cols-2'>
//           {/* LEFT HERO */}
//           <div
//             className={`relative hidden md:flex flex-col justify-between bg-gradient-to-br ${ACCENT.hero} text-white p-10 lg:p-12`}
//           >
//             <div className='pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]' />
//             <motion.div
//               className='relative z-10 space-y-10'
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.1, duration: 0.4 }}
//             >
//               <div className='flex items-center gap-3'>
//                 <motion.div
//                   initial={{ scale: 0.96, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 280,
//                     damping: 18,
//                     delay: 0.15,
//                   }}
//                   className='flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20'
//                 >
//                   <div className='h-6 w-3 rounded-xl border-2 border-white/80 relative'>
//                     <div className='w-2 h-[2px] bg-white absolute top-1 left-1/2 -translate-x-1/2 rounded-full' />
//                     <div className='w-1 h-1 bg-white/80 absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full' />
//                   </div>
//                 </motion.div>
//                 <span className='text-2xl font-semibold tracking-wide'>
//                   FIXIEZ
//                 </span>
//               </div>

//               <div>
//                 <motion.h1
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, duration: 0.45 }}
//                   className='text-3xl lg:text-4xl font-bold leading-tight'
//                 >
//                   Welcome to <span className='text-white/90'>FIXIEZ</span>
//                 </motion.h1>
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.28, duration: 0.45 }}
//                   className='mt-4 text-sm lg:text-base text-white/80 max-w-md'
//                 >
//                   Your trusted partner for device repair parts, tools, and
//                   services. Join our community of repair professionals and DIY
//                   enthusiasts.
//                 </motion.p>
//               </div>

//               <motion.ul
//                 variants={staggerWrap}
//                 initial='hidden'
//                 animate='show'
//                 className='space-y-4 text-sm'
//               >
//                 <AnimatedFeature
//                   title='Secure & Trusted Platform'
//                   text='Safe checkout, verified sellers, protected payments.'
//                   icon={FaShieldHalved}
//                 />
//                 <AnimatedFeature
//                   title='Fast Delivery Across India'
//                   text='Same-day dispatch for most orders placed before 5 PM.'
//                   icon={FaTruckFast}
//                 />
//                 <AnimatedFeature
//                   title='Professional Repair Tools & Parts'
//                   text='OEM-grade components and shop-ready repair tools.'
//                   icon={FaWrench}
//                 />
//                 <AnimatedFeature
//                   title='24/7 Customer Support'
//                   text='Help with orders, parts, and repairs whenever needed.'
//                   icon={FaHeadset}
//                 />
//               </motion.ul>
//             </motion.div>

//             <div className='relative z-10 mt-8 text-xs text-white/70'>
//               Powered by FIXIEZ • Because every device deserves a second life.
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className='relative bg-white px-6 py-7 sm:px-10 sm:py-10'>
//             <div className='flex mb-6 bg-slate-100 rounded-full p-1 text-sm font-medium border border-slate-200'>
//               <TabButton
//                 active={isLogin}
//                 onClick={() => setMode('login')}
//                 label='Login'
//                 ACCENT={ACCENT}
//               />
//               <TabButton
//                 active={!isLogin}
//                 onClick={() => setMode('signup')}
//                 label='Sign Up'
//                 ACCENT={ACCENT}
//               />
//             </div>

//             {err && (
//               <div className='mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
//                 {err}
//               </div>
//             )}

//             <div className='relative min-h-[520px] sm:min-h-[460px]'>
//               <AnimatePresence mode='wait' custom={isLogin}>
//                 {isLogin ? (
//                   <motion.form
//                     key='login'
//                     custom={isLogin}
//                     variants={formSwitch}
//                     initial='initial'
//                     animate='animate'
//                     exit='exit'
//                     onSubmit={onLogin}
//                     className='space-y-5'
//                   >
//                     <div>
//                       <h2 className='text-2xl font-bold text-slate-900'>
//                         Welcome Back
//                       </h2>
//                       <p className='mt-1 text-sm text-slate-500'>
//                         Sign in to your FIXIEZ account.
//                       </p>
//                     </div>

//                     <motion.div
//                       variants={staggerWrap}
//                       initial='hidden'
//                       animate='show'
//                       className='space-y-4'
//                     >
//                       <motion.div variants={staggerItem}>
//                         <FormInput
//                           label='Email Address'
//                           type='email'
//                           value={loginForm.email}
//                           onChange={(e) =>
//                             setLoginForm((p) => ({
//                               ...p,
//                               email: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter your email'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>
//                       <motion.div variants={staggerItem}>
//                         <PasswordInput
//                           label='Password'
//                           value={loginForm.password}
//                           onChange={(e) =>
//                             setLoginForm((p) => ({
//                               ...p,
//                               password: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter your password'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>
//                     </motion.div>

//                     <div className='flex items-center justify-between text-xs sm:text-sm'>
//                       <label className='inline-flex items-center gap-2 text-slate-600 cursor-pointer select-none'>
//                         <input
//                           type='checkbox'
//                           className='h-4 w-4 rounded border-slate-300 cursor-pointer'
//                         />
//                         Remember me
//                       </label>
//                       <button
//                         type='button'
//                         className={`${ACCENT.text} font-medium hover:underline cursor-pointer`}
//                       >
//                         Forgot Password?
//                       </button>
//                     </div>

//                     <motion.button
//                       whileHover={{ scale: 1.01 }}
//                       whileTap={{ scale: 0.985 }}
//                       disabled={loading}
//                       type='submit'
//                       className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white ${ACCENT.btn} transition disabled:opacity-70 disabled:cursor-not-allowed`}
//                     >
//                       <FaArrowRight className='text-sm' />
//                       <span>{loading ? 'Signing In...' : 'Sign In'}</span>
//                     </motion.button>

//                     <Divider />
//                     <SocialButtons />

//                     <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
//                       Don’t have an account?{' '}
//                       <button
//                         type='button'
//                         onClick={() => setMode('signup')}
//                         className={`font-semibold ${ACCENT.text} hover:underline cursor-pointer`}
//                       >
//                         Sign Up
//                       </button>
//                     </p>
//                   </motion.form>
//                 ) : (
//                   <motion.form
//                     key='signup'
//                     custom={isLogin}
//                     variants={formSwitch}
//                     initial='initial'
//                     animate='animate'
//                     exit='exit'
//                     onSubmit={onSignup}
//                     className='space-y-4'
//                   >
//                     <div>
//                       <h2 className='text-2xl font-bold text-slate-900'>
//                         Create Account
//                       </h2>
//                       <p className='mt-1 text-sm text-slate-500'>
//                         Join FIXIEZ today for the best repair experience.
//                       </p>
//                     </div>

//                     <motion.div
//                       variants={staggerWrap}
//                       initial='hidden'
//                       animate='show'
//                       className='space-y-4'
//                     >
//                       <motion.div
//                         variants={staggerItem}
//                         className='grid grid-cols-1 sm:grid-cols-2 gap-4'
//                       >
//                         <FormInput
//                           label='First Name'
//                           value={signupForm.firstName}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               firstName: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter first name'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                         <FormInput
//                           label='Last Name'
//                           value={signupForm.lastName}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               lastName: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter last name'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>

//                       <motion.div variants={staggerItem}>
//                         <FormInput
//                           label='Email Address'
//                           type='email'
//                           value={signupForm.email}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               email: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter your email'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>

//                       <motion.div variants={staggerItem}>
//                         <FormInput
//                           label='Phone Number'
//                           type='tel'
//                           value={signupForm.phone}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               phone: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter your phone number'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>

//                       <motion.div variants={staggerItem}>
//                         <FormInput
//                           label='Official Address'
//                           value={signupForm.address}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               address: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter your address'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>

//                       <motion.div
//                         variants={staggerItem}
//                         className='grid grid-cols-1 sm:grid-cols-2 gap-4'
//                       >
//                         <FormInput
//                           label='City'
//                           value={signupForm.city}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               city: e.target.value,
//                             }))
//                           }
//                           placeholder='Enter your city'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                         <FormInput
//                           label='Pincode'
//                           maxLength={6}
//                           value={signupForm.pincode}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               pincode: e.target.value,
//                             }))
//                           }
//                           placeholder='______'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>

//                       <motion.div
//                         variants={staggerItem}
//                         className='grid grid-cols-1 sm:grid-cols-2 gap-4'
//                       >
//                         <PasswordInput
//                           label='Password'
//                           value={signupForm.password}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               password: e.target.value,
//                             }))
//                           }
//                           placeholder='Create a password'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                         <PasswordInput
//                           label='Confirm Password'
//                           value={signupForm.confirmPassword}
//                           onChange={(e) =>
//                             setSignupForm((p) => ({
//                               ...p,
//                               confirmPassword: e.target.value,
//                             }))
//                           }
//                           placeholder='Confirm password'
//                           ACCENT={ACCENT}
//                           required
//                         />
//                       </motion.div>
//                     </motion.div>

//                     <label className='mt-2 inline-flex items-start gap-2 text-xs sm:text-sm text-slate-600 cursor-pointer select-none'>
//                       <input
//                         type='checkbox'
//                         className='mt-1 h-4 w-4 rounded border-slate-300 cursor-pointer'
//                         checked={signupForm.agree}
//                         onChange={(e) =>
//                           setSignupForm((p) => ({
//                             ...p,
//                             agree: e.target.checked,
//                           }))
//                         }
//                       />
//                       <span>
//                         I agree to the{' '}
//                         <button
//                           type='button'
//                           className={`${ACCENT.text} font-medium hover:underline cursor-pointer`}
//                         >
//                           Terms of Service
//                         </button>{' '}
//                         and{' '}
//                         <button
//                           type='button'
//                           className={`${ACCENT.text} font-medium hover:underline cursor-pointer`}
//                         >
//                           Privacy Policy
//                         </button>
//                         .
//                       </span>
//                     </label>

//                     <motion.button
//                       whileHover={{ scale: 1.01 }}
//                       whileTap={{ scale: 0.985 }}
//                       disabled={loading}
//                       type='submit'
//                       className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white ${ACCENT.btn} transition disabled:opacity-70 disabled:cursor-not-allowed`}
//                     >
//                       <FaUserPlus className='text-sm' />
//                       <span>{loading ? 'Creating...' : 'Create Account'}</span>
//                     </motion.button>

//                     <Divider />
//                     <SocialButtons />

//                     <p className='mt-4 text-xs sm:text-sm text-center text-slate-500'>
//                       Already have an account?{' '}
//                       <button
//                         type='button'
//                         onClick={() => setMode('login')}
//                         className={`font-semibold ${ACCENT.text} hover:underline cursor-pointer`}
//                       >
//                         Sign In
//                       </button>
//                     </p>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // ---- SUB COMPONENTS ----
// const TabButton = ({ active, onClick, label, ACCENT }) => {
//   return (
//     <button
//       type='button'
//       onClick={onClick}
//       className={`cursor-pointer flex-1 py-2 rounded-full font-medium relative overflow-hidden ${
//         active
//           ? `${ACCENT.btn} text-white`
//           : 'text-slate-500 hover:text-slate-800'
//       }`}
//     >
//       {active && (
//         <motion.div
//           layoutId='activeTab'
//           className='absolute inset-0 bg-white/10'
//           transition={{ type: 'spring', stiffness: 520, damping: 34 }}
//         />
//       )}
//       <span className='relative z-10'>{label}</span>
//     </button>
//   );
// };

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

// const PasswordInput = ({
//   label,
//   placeholder,
//   value,
//   onChange,
//   ACCENT,
//   ...rest
// }) => {
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
//           {...rest}
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

// const AnimatedFeature = ({ title, text, icon: Icon }) => (
//   <motion.li variants={staggerItem} className='flex gap-3'>
//     <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
//       <Icon className='text-lg' />
//     </div>
//     <div>
//       <p className='text-sm font-semibold'>{title}</p>
//       <p className='text-xs text-white/80'>{text}</p>
//     </div>
//   </motion.li>
// );

// export default AuthPage;

////////////////////////

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldHalved,
  FaTruckFast,
  FaWrench,
  FaHeadset,
} from 'react-icons/fa6';

import { loginApi, signupApi } from '../api/authApi';

import ToggleButton from '../components/ToggleButton';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

// ---- MOTION ----
const pageIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const formSwitch = {
  initial: (isLogin) => ({
    opacity: 0,
    x: isLogin ? 30 : -30,
    filter: 'blur(6px)',
  }),
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
  exit: (isLogin) => ({
    opacity: 0,
    x: isLogin ? -30 : 30,
    filter: 'blur(6px)',
    transition: { duration: 0.16 },
  }),
};

const staggerWrap = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
};

const AuthPage = () => {
  const [mode, setMode] = useState('login');
  const isLogin = mode === 'login';

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const ACCENT = useMemo(
    () => ({
      ring: 'focus:ring-[#007bff]/35',
      btn: 'bg-[#007bff] hover:bg-[#0b63d1] shadow-lg shadow-blue-500/30',
      text: 'text-[#007bff]',
      hero: 'from-blue-600 via-indigo-600 to-fuchsia-600',
    }),
    []
  );

  const onLogin = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      setLoading(true);
      const res = await loginApi(loginForm);

      if (res?.token) localStorage.setItem('token', res.token);

      console.log('login success:', res);
    } catch (error) {
      setErr(error?.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  const onSignup = async (e) => {
    e.preventDefault();
    setErr('');

    if (signupForm.password !== signupForm.confirmPassword) {
      setErr('Passwords do not match.');
      return;
    }
    if (!signupForm.agree) {
      setErr('Please accept Terms & Privacy Policy.');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        firstName: signupForm.firstName,
        lastName: signupForm.lastName,
        email: signupForm.email,
        phone: signupForm.phone,
        address: signupForm.address,
        city: signupForm.city,
        pincode: signupForm.pincode,
        password: signupForm.password,
      };

      const res = await signupApi(payload);
      console.log('signup success:', res);

      // Switch to login after signup
      setMode('login');
      setLoginForm((p) => ({ ...p, email: signupForm.email, password: '' }));
    } catch (error) {
      setErr(error?.message || 'Signup failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8'>
      <motion.div
        variants={pageIn}
        initial='initial'
        animate='animate'
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className='max-w-6xl w-full rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-lg'
      >
        <div className='grid md:grid-cols-2'>
          {/* LEFT HERO (keep here; no need to split) */}
          <div
            className={`relative hidden md:flex flex-col justify-between bg-gradient-to-br ${ACCENT.hero} text-white p-10 lg:p-12`}
          >
            <div className='pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]' />

            <motion.div
              className='relative z-10 space-y-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20'>
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

              <motion.ul
                variants={staggerWrap}
                initial='hidden'
                animate='show'
                className='space-y-4 text-sm'
              >
                <motion.li variants={staggerItem} className='flex gap-3'>
                  <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
                    <FaShieldHalved className='text-lg' />
                  </div>
                  <div>
                    <p className='text-sm font-semibold'>
                      Secure & Trusted Platform
                    </p>
                    <p className='text-xs text-white/80'>
                      Safe checkout, verified sellers, protected payments.
                    </p>
                  </div>
                </motion.li>

                <motion.li variants={staggerItem} className='flex gap-3'>
                  <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
                    <FaTruckFast className='text-lg' />
                  </div>
                  <div>
                    <p className='text-sm font-semibold'>
                      Fast Delivery Across India
                    </p>
                    <p className='text-xs text-white/80'>
                      Same-day dispatch for most orders placed before 5 PM.
                    </p>
                  </div>
                </motion.li>

                <motion.li variants={staggerItem} className='flex gap-3'>
                  <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
                    <FaWrench className='text-lg' />
                  </div>
                  <div>
                    <p className='text-sm font-semibold'>
                      Professional Repair Tools & Parts
                    </p>
                    <p className='text-xs text-white/80'>
                      OEM-grade components and shop-ready repair tools.
                    </p>
                  </div>
                </motion.li>

                <motion.li variants={staggerItem} className='flex gap-3'>
                  <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
                    <FaHeadset className='text-lg' />
                  </div>
                  <div>
                    <p className='text-sm font-semibold'>
                      24/7 Customer Support
                    </p>
                    <p className='text-xs text-white/80'>
                      Help with orders, parts, and repairs whenever needed.
                    </p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>

            <div className='relative z-10 mt-8 text-xs text-white/70'>
              Powered by FIXIEZ • Because every device deserves a second life.
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className='relative bg-white px-6 py-7 sm:px-10 sm:py-10'>
            <ToggleButton isLogin={isLogin} setMode={setMode} ACCENT={ACCENT} />

            {err && (
              <div className='mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
                {err}
              </div>
            )}

            <div className='relative min-h-[520px] sm:min-h-[460px]'>
              <AnimatePresence mode='wait' custom={isLogin}>
                {isLogin ? (
                  <LoginForm
                    key='login'
                    isLogin={isLogin}
                    ACCENT={ACCENT}
                    loading={loading}
                    formSwitch={formSwitch}
                    staggerWrap={staggerWrap}
                    staggerItem={staggerItem}
                    loginForm={loginForm}
                    setLoginForm={setLoginForm}
                    onLogin={onLogin}
                    onSwitchToSignup={() => setMode('signup')}
                  />
                ) : (
                  <SignupForm
                    key='signup'
                    isLogin={isLogin}
                    ACCENT={ACCENT}
                    loading={loading}
                    formSwitch={formSwitch}
                    staggerWrap={staggerWrap}
                    staggerItem={staggerItem}
                    signupForm={signupForm}
                    setSignupForm={setSignupForm}
                    onSignup={onSignup}
                    onSwitchToLogin={() => setMode('login')}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
