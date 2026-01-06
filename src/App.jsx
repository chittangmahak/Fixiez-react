import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

import PrivateRoute from './components/auth/PrivateRoute';

import { AppLayout } from './pages/AppLayout';
import PrivateLayout from './pages/PrivateLayout';

import Home from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import BecomeMemberPage from './pages/BecomeMemberPage';
import FixiezForBusinessPage from './pages/FixiezForBusinessPage';
import ListYourPropertyPage from './pages/ListYourPropertyPage';

import Dashboard from './components/core/Dashboard';
import Profile from './pages/Profile';
import SecuritySettings from './pages/SecuritySettings';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 PUBLIC ROUTES */}
        <Route element={<AppLayout />}>
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

          {/* 🔓 AUTH PAGE */}
          <Route
            path='/auth'
            element={
              isLoggedIn ? <Navigate to='/dashboard' replace /> : <AuthPage />
            }
          />
        </Route>

        {/* 🔒 PRIVATE ROUTES */}
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/security-settings' element={<SecuritySettings />} />
          </Route>
        </Route>

        {/* ❓ FALLBACK */}
        <Route
          path='*'
          element={<Navigate to={isLoggedIn ? '/dashboard' : '/'} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
