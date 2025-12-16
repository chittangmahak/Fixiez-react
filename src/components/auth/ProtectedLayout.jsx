import React from 'react';
import { Outlet } from 'react-router';
import AuthProvider from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';

const ProtectedLayout = () => {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default ProtectedLayout;
