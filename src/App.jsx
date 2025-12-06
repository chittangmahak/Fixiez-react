import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

import { AppLayout } from './pages/AppLayout';
import Home from './pages/HomePage';
import Signup from './components/auth/Signup';
import AuthPage from './components/auth/AuthPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/auth' element={<Auth />} /> */}
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
