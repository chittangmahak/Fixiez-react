import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const AppLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='grow'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
