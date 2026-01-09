// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import '../components/auth/Auth.css';

// import Login from '../components/auth/Login';
// import Signup from '../components/auth/Signup';

// import { FaUser, FaWrench } from 'react-icons/fa6';

// const AuthPage = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [role, setRole] = useState('customer'); // 'customer' or 'provider'

//   const togglePanel = () => setIsRegister(!isRegister);

//   return (
//     <div
//       className={`auth-container flex justify-center h-screen items-center overflow-hidden`}
//     >
//       <div
//         className={`box lg:max-w-5xl ${
//           isRegister ? 'is-registering' : 'is-logging-in'
//         }`}
//       >
//         {/* 3D FLIPPING COVER */}
//         <div className={`cover ${isRegister ? 'rotate-active' : ''}`}>
//           <div className='front'>
//             <img
//               src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070'
//               alt='Repair'
//             />
//             <div className='text-overlay'>
//               <span className='text-1'>
//                 Precision Repairs,
//                 <br />
//                 Guaranteed.
//               </span>
//               <span className='text-2'>
//                 Log in to manage your fixing requests or shop status.
//               </span>
//             </div>
//           </div>
//           <div className='back'>
//             <img
//               src='https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974'
//               alt='Digital'
//             />
//             <div className='text-overlay'>
//               <span className='text-1'>
//                 Join the Fixiez
//                 <br />
//                 Network.
//               </span>
//               <span className='text-2'>
//                 Create an account to start your journey with us.
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* FORMS CONTAINER */}
//         <div className='forms-container'>
//           <div className='form-content'>
//             {/* LOGIN SECTION */}
//             <div className='login-section'>
//               {!isRegister && (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                   <h2 className='text-2xl font-bold text-slate-800 mb-1'>
//                     Welcome Back
//                   </h2>
//                   <p className='text-slate-500 text-sm mb-6'>
//                     Enter your details to access your account
//                   </p>
//                   <RoleToggle role={role} setRole={setRole} />
//                   <Login role={role} />
//                   <div className='footer-link'>
//                     Don't have an account?{' '}
//                     <button onClick={togglePanel} className='cursor-pointer'>
//                       Sign up
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
//             </div>

//             {/* SIGNUP SECTION */}
//             <div className='signup-section'>
//               {isRegister && (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                   <h2 className='text-2xl font-bold text-slate-800 mb-1'>
//                     Get Started
//                   </h2>
//                   <p className='text-slate-500 text-sm mb-6'>
//                     Join the #1 repair marketplace today
//                   </p>
//                   <RoleToggle role={role} setRole={setRole} />
//                   <Signup role={role} />
//                   <div className='footer-link'>
//                     Already a member?{' '}
//                     <button onClick={togglePanel} className='cursor-pointer'>
//                       Log in
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RoleToggle = ({ role, setRole }) => (
//   <div className='relative flex bg-slate-100 p-1.5 rounded-full w-full mb-8 border border-slate-200'>
//     <motion.div
//       className='absolute top-1.5 bottom-1.5 left-1.5 bg-white rounded-full shadow-sm z-0'
//       animate={{
//         x: role === 'customer' ? '0%' : '100%',
//         width: 'calc(50% - 6px)',
//       }}
//       transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//     />
//     <button
//       onClick={() => setRole('customer')}
//       className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
//         role === 'customer' ? 'text-blue-600' : 'text-slate-400'
//       }`}
//     >
//       <FaUser size={14} /> Customer
//     </button>
//     <button
//       onClick={() => setRole('provider')}
//       className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
//         role === 'provider' ? 'text-blue-600' : 'text-slate-400'
//       }`}
//     >
//       <FaWrench size={14} /> Shop Vendor
//     </button>
//   </div>
// );

// export default AuthPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../components/auth/Auth.css';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import { FaUserGear, FaShop, FaWrench } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState('customer');

  // --- ADDED STATE FOR INPUTS ---
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const togglePanel = () => setIsRegister(!isRegister);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', loginForm, 'Role:', role);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', signupForm, 'Role:', role);
  };

  return (
    <div className='auth-container flex justify-center h-screen items-center overflow-hidden bg-[#0a0f18] p-4'>
      <div
        className={`box lg:max-w-5xl ${
          isRegister ? 'is-registering' : 'is-logging-in'
        }`}
      >
        {/* 3D COVER */}
        <div className={`cover ${isRegister ? 'rotate-active' : ''}`}>
          <div className='front'>
            <img
              src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070'
              alt='Repair'
            />
            <div className='text-overlay'>
              <span className='text-1'>Precision Repairs</span>
              <span className='text-2'>Welcome back to Fixiez.pro</span>
            </div>
          </div>
          <div className='back'>
            <img
              src='https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974'
              alt='Digital'
            />
            <div className='text-overlay'>
              <span className='text-1'>Join the Network</span>
              <span className='text-2'>Start your journey with us</span>
            </div>
          </div>
        </div>

        <div className='forms-container'>
          <div className='form-content'>
            {/* LOGIN SECTION */}
            <div
              className={`login-section ${
                isRegister ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              {!isRegister && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className='text-2xl font-bold text-slate-800 mb-1'>
                    Welcome Back
                  </h2>
                  <p className='text-slate-500 text-sm mb-6'>
                    Enter your details to access your account
                  </p>
                  <RoleToggle role={role} setRole={setRole} />
                  <Login
                    role={role}
                    loginForm={loginForm}
                    setLoginForm={setLoginForm}
                    onLogin={handleLoginSubmit}
                  />
                  <div className='footer-link'>
                    Don't have an account?{' '}
                    <button
                      onClick={togglePanel}
                      className='cursor-pointer font-bold text-blue-600'
                    >
                      Sign up
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* SIGNUP SECTION */}
            <div
              className={`signup-section ${
                !isRegister ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              {isRegister && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className='text-2xl font-bold text-slate-800 mb-1'>
                    Get Started
                  </h2>
                  <p className='text-slate-500 text-sm mb-6'>
                    Join the #1 repair marketplace today
                  </p>
                  <RoleToggle role={role} setRole={setRole} />
                  <Signup
                    role={role}
                    signupForm={signupForm}
                    setSignupForm={setSignupForm}
                    onSignup={handleSignupSubmit}
                  />
                  <div className='footer-link'>
                    Already a member?{' '}
                    <button
                      onClick={togglePanel}
                      className='cursor-pointer font-bold text-blue-600'
                    >
                      Log in
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoleToggle = ({ role, setRole }) => (
  <div className='relative flex bg-slate-100 p-1.5 rounded-full w-full mb-8 border border-slate-200'>
    <motion.div
      className='absolute top-1.5 bottom-1.5 left-1.5 bg-white rounded-full shadow-sm z-0'
      animate={{
        x: role === 'customer' ? '0%' : '100%',
        width: 'calc(50% - 6px)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
    <button
      onClick={() => setRole('customer')}
      className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
        role === 'customer' ? 'text-blue-600' : 'text-slate-400'
      }`}
    >
      <FaUser size={16} /> Customer
    </button>
    <button
      onClick={() => setRole('provider')}
      className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
        role === 'provider' ? 'text-blue-600' : 'text-slate-400'
      }`}
    >
      <FaWrench size={16} /> Shop Vendor
    </button>
  </div>
);

export default AuthPage;
