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
