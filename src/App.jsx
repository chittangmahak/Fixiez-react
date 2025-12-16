// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router';
// import { useSelector } from 'react-redux';
// import { AppLayout } from './pages/AppLayout';
// import Home from './pages/HomePage';
// // import Signup from './components/auth/Signup';
// import AuthPage from './components/auth/AuthPage';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import AuthProvider from './components/auth/AuthProvider';
// import { Navigate } from 'react-router';

// function App() {
//   const { isLoggedIn } = useSelector((state) => state.auth);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/auths' element={<AuthPage />} />
//         <AuthProvider>
//           <Route
//             path='/auth'
//             element={isLoggedIn ? <Navigate to='/' replace /> : <AuthPage />}
//           />

//           <Route
//             element={
//               <ProtectedRoute>
//                 <AppLayout />
//               </ProtectedRoute>
//             }
//           >
//             <Route path='/home' element={<Home />} />
//             <Route path='/login' element={<AuthPage />} />
//           </Route>

//           {/* Catch All Route - Redirect to home or login */}
//           <Route
//             path='*'
//             element={<Navigate to={isLoggedIn ? '/' : '/login'} replace />}
//           />
//         </AuthProvider>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

import { AppLayout } from './pages/AppLayout';
import Home from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProtectedLayout from './components/auth/ProtectedLayout';
import BecomeMemberPage from './pages/BecomeMemberPage';
import FixiezForBusinessPage from './pages/FixiezForBusinessPage';
import ListYourPropertyPage from './pages/ListYourPropertyPage';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* ✅ PUBLIC ROUTES */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/become-member' element={<BecomeMemberPage />} />
          <Route
            path='/fixiez-for-business'
            element={<FixiezForBusinessPage />}
          />
          <Route
            path='/list-your-property'
            element={<ListYourPropertyPage />}
          />

          {/* ✅ AUTH ROUTE (PUBLIC) */}
          <Route
            path='/auth'
            element={
              isLoggedIn ? <Navigate to='/dashboard' replace /> : <AuthPage />
            }
          />

          {/* ✅ PROTECTED ROUTES */}
          <Route element={<ProtectedLayout />}>
            <Route path='/dashboard' element={<Home />} />
            {/* Add more protected routes here */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/orders" element={<Orders />} /> */}
          </Route>

          {/* ✅ CATCH ALL */}
          <Route
            path='*'
            element={
              <Navigate to={isLoggedIn ? '/dashboard' : '/auth'} replace />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
