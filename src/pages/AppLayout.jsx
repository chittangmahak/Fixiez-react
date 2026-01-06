import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import PrivateNavbar from '../components/core/PrivateNavbar';

export const AppLayout = () => (
  <div className='flex flex-col min-h-screen'>
    <Navbar />
    <div className='grow'>
      <Outlet />
    </div>
    <Footer />
  </div>
);
