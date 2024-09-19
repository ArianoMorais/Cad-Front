import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { getNavigation, demoTheme } from '../config';
import LogoutButton from './LogoutButton';

function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <AppProvider
    branding={{
      title: 'Cad+',
    }}
      navigation={getNavigation(isLoggedIn)}
      theme={demoTheme}
    >
      <DashboardLayout title="Novo Título" sx={{ position: 'relative' }}>
        {isLoggedIn && <LogoutButton />}
        <Outlet /> 
      </DashboardLayout>
    </AppProvider>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
};

export default Layout;