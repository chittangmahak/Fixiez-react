import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from './Footer';

export const AppLayout = () => (
  <div className='flex flex-col min-h-screen'>
    <Navbar />
    <div className='grow'>
      <Outlet />
    </div>
    <Footer />
  </div>
);
