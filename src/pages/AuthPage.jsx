// import React, { useMemo, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   FaShieldHalved,
//   FaTruckFast,
//   FaWrench,
//   FaHeadset,
// } from 'react-icons/fa6';

// import { useDispatch } from 'react-redux';
// import { loginUser, signupUser } from '../redux/actions/authActions';

// import { loginApi, signupApi } from '../api/authApi';

// import ToggleButton from '../components/ToggleButton';
// import LoginForm from '../components/LoginForm';
// import SignupForm from '../components/SignupForm';

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

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

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

//       await dispatch(loginUser(loginForm));

//       navigate('/dashboard');
//     } catch (error) {
//       setErr(error?.message || 'Login failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onSignup = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       const payload = { ...signupForm };

//       await dispatch(signupUser(payload));

//       setMode('login');
//     } catch (error) {
//       setErr(error?.message || 'Signup failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8'>
//       <motion.div
//         variants={pageIn}
//         initial='initial'
//         animate='animate'
//         transition={{ duration: 0.45, ease: 'easeOut' }}
//         className='max-w-6xl w-full rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-lg'
//       >
//         <div className='grid md:grid-cols-2'>
//           {/* LEFT HERO (keep here; no need to split) */}
//           <div
//             className={`relative hidden md:flex flex-col justify-between bg-linear-to-br ${ACCENT.hero} text-white p-10 lg:p-12`}
//           >
//             <div className='pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)] ' />

//             <motion.div
//               className='relative z-10 space-y-10'
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.1, duration: 0.4 }}
//             >
//               <div className='flex items-center gap-3'>
//                 <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20'>
//                   <div className='h-6 w-3 rounded-xl border-2 border-white/80 relative'>
//                     <div className='w-2 h-[2px] bg-white absolute top-1 left-1/2 -translate-x-1/2 rounded-full' />
//                     <div className='w-1 h-1 bg-white/80 absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full' />
//                   </div>
//                 </div>
//                 <span className='text-2xl font-semibold tracking-wide'>
//                   FIXIEZ
//                 </span>
//               </div>

//               <div>
//                 <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>
//                   Welcome to <span className='text-white/90'>FIXIEZ</span>
//                 </h1>
//                 <p className='mt-4 text-sm lg:text-base text-white/80 max-w-md'>
//                   Your trusted partner for device repair parts, tools, and
//                   services. Join our community of repair professionals and DIY
//                   enthusiasts.
//                 </p>
//               </div>

//               <motion.ul
//                 variants={staggerWrap}
//                 initial='hidden'
//                 animate='show'
//                 className='space-y-4 text-sm'
//               >
//                 <motion.li variants={staggerItem} className='flex gap-3'>
//                   <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
//                     <FaShieldHalved className='text-lg' />
//                   </div>
//                   <div>
//                     <p className='text-sm font-semibold'>
//                       Secure & Trusted Platform
//                     </p>
//                     <p className='text-xs text-white/80'>
//                       Safe checkout, verified sellers, protected payments.
//                     </p>
//                   </div>
//                 </motion.li>

//                 <motion.li variants={staggerItem} className='flex gap-3'>
//                   <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
//                     <FaTruckFast className='text-lg' />
//                   </div>
//                   <div>
//                     <p className='text-sm font-semibold'>
//                       Fast Delivery Across India
//                     </p>
//                     <p className='text-xs text-white/80'>
//                       Same-day dispatch for most orders placed before 5 PM.
//                     </p>
//                   </div>
//                 </motion.li>

//                 <motion.li variants={staggerItem} className='flex gap-3'>
//                   <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
//                     <FaWrench className='text-lg' />
//                   </div>
//                   <div>
//                     <p className='text-sm font-semibold'>
//                       Professional Repair Tools & Parts
//                     </p>
//                     <p className='text-xs text-white/80'>
//                       OEM-grade components and shop-ready repair tools.
//                     </p>
//                   </div>
//                 </motion.li>

//                 <motion.li variants={staggerItem} className='flex gap-3'>
//                   <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 border border-white/20'>
//                     <FaHeadset className='text-lg' />
//                   </div>
//                   <div>
//                     <p className='text-sm font-semibold'>
//                       24/7 Customer Support
//                     </p>
//                     <p className='text-xs text-white/80'>
//                       Help with orders, parts, and repairs whenever needed.
//                     </p>
//                   </div>
//                 </motion.li>
//               </motion.ul>
//             </motion.div>

//             <div className='relative z-10 mt-8 text-xs text-white/70'>
//               Powered by FIXIEZ • Because every device deserves a second life.
//             </div>
//           </div>

//           {/* RIGHT PANEL */}
//           <div className='relative bg-white px-6 py-7 sm:px-10 sm:py-10'>
//             <ToggleButton isLogin={isLogin} setMode={setMode} ACCENT={ACCENT} />

//             {err && (
//               <div className='mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
//                 {err}
//               </div>
//             )}

//             <div className='relative min-h-[520px] sm:min-h-[460px]'>
//               <AnimatePresence mode='wait' custom={isLogin}>
//                 {isLogin ? (
//                   <LoginForm
//                     key='login'
//                     isLogin={isLogin}
//                     ACCENT={ACCENT}
//                     loading={loading}
//                     formSwitch={formSwitch}
//                     staggerWrap={staggerWrap}
//                     staggerItem={staggerItem}
//                     loginForm={loginForm}
//                     setLoginForm={setLoginForm}
//                     onLogin={onLogin}
//                     onSwitchToSignup={() => setMode('signup')}
//                   />
//                 ) : (
//                   <SignupForm
//                     key='signup'
//                     isLogin={isLogin}
//                     ACCENT={ACCENT}
//                     loading={loading}
//                     formSwitch={formSwitch}
//                     staggerWrap={staggerWrap}
//                     staggerItem={staggerItem}
//                     signupForm={signupForm}
//                     setSignupForm={setSignupForm}
//                     onSignup={onSignup}
//                     onSwitchToLogin={() => setMode('login')}
//                   />
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default AuthPage;

import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldHalved,
  FaWrench,
  FaUser,
  FaStore,
  FaScrewdriverWrench,
  FaCircleCheck,
} from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { loginUser, signupUser } from '../redux/actions/authActions';

import ToggleButton from '../components/ToggleButton';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const AuthPage = () => {
  const [mode, setMode] = useState('login');
  // Roles: 'customer' (seeker) or 'provider' (fixer)
  const [role, setRole] = useState('customer');
  // Sub-type for providers: 'shop' or 'individual'
  const [providerType, setProviderType] = useState('shop');

  const isLogin = mode === 'login';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const ACCENT = useMemo(
    () => ({
      ring: 'focus:ring-[#007bff]/35',
      btn: 'bg-[#007bff] hover:bg-[#0b63d1] shadow-lg shadow-blue-500/30',
      text: 'text-[#007bff]',
      hero: 'from-slate-900 via-blue-900 to-slate-900',
    }),
    []
  );

  const onHandleAuth = async (e) => {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      // Logic: Send the specific sub-role to the backend
      const finalRole = role === 'customer' ? 'customer' : providerType;
      const payload = isLogin
        ? { ...loginForm, role: finalRole }
        : { ...signupForm, role: finalRole };

      if (isLogin) {
        await dispatch(loginUser(payload));
        navigate('/dashboard');
      } else {
        await dispatch(signupUser(payload));
        setMode('login');
      }
    } catch (error) {
      setErr(error?.message || 'Authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0a0f18] px-4 py-8'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='max-w-5xl w-full rounded-3xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row'
      >
        {/* LEFT: INFO PANEL */}
        <div
          className={`md:w-5/12 bg-gradient-to-br ${ACCENT.hero} p-10 text-white flex flex-col justify-between`}
        >
          <div>
            <h2 className='text-2xl font-bold tracking-tighter italic'>
              FIXIEZ.PRO
            </h2>
            <div className='mt-10 space-y-8'>
              <h1 className='text-3xl font-light leading-tight'>
                {role === 'customer'
                  ? 'Get your device fixed by experts.'
                  : 'Grow your repair business with us.'}
              </h1>
              <ul className='space-y-4'>
                {['Verified Parts', 'Secure Payments', 'Repair Tracking'].map(
                  (item) => (
                    <li
                      key={item}
                      className='flex items-center gap-3 text-sm text-white/70'
                    >
                      <FaCircleCheck className='text-blue-400' /> {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className='text-xs text-white/30'>
            © 2026 FIXIEZ Repair Network
          </div>
        </div>

        {/* RIGHT: FORM PANEL */}
        <div className='md:w-7/12 bg-white p-8 lg:p-12'>
          <ToggleButton isLogin={isLogin} setMode={setMode} ACCENT={ACCENT} />

          {/* MAIN ROLE SELECTOR */}
          <div className='mt-8 flex bg-slate-100 p-1 rounded-2xl'>
            <button
              onClick={() => setRole('customer')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                role === 'customer'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-slate-500'
              }`}
            >
              <FaUser size={14} /> I need a Repair
            </button>
            <button
              onClick={() => setRole('provider')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                role === 'provider'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-slate-500'
              }`}
            >
              <FaWrench size={14} /> I am a Repairer
            </button>
          </div>

          {/* SUB-ROLE SELECTOR (Visible only if 'Repairer' is selected) */}
          <AnimatePresence>
            {role === 'provider' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className='overflow-hidden'
              >
                <div className='grid grid-cols-2 gap-3 mt-4'>
                  <button
                    onClick={() => setProviderType('shop')}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                      providerType === 'shop'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-100 grayscale opacity-70'
                    }`}
                  >
                    <FaStore className='text-blue-600' />
                    <div className='text-left'>
                      <p className='text-[10px] font-bold uppercase'>
                        Shop/Vendor
                      </p>
                      <p className='text-[9px] text-slate-500'>
                        Commercial Outlet
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setProviderType('individual')}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                      providerType === 'individual'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-100 grayscale opacity-70'
                    }`}
                  >
                    <FaScrewdriverWrench className='text-blue-600' />
                    <div className='text-left'>
                      <p className='text-[10px] font-bold uppercase'>
                        Technician
                      </p>
                      <p className='text-[9px] text-slate-500'>
                        Freelance Expert
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='mt-8'>
            {isLogin ? (
              <LoginForm
                role={role === 'customer' ? 'customer' : providerType}
                onLogin={onHandleAuth}
                // ... props
              />
            ) : (
              <SignupForm
                role={role === 'customer' ? 'customer' : providerType}
                onSignup={onHandleAuth}
                // ... props
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
