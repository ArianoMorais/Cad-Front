import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import HomePage from './containers/Home/HomePage';
import DashboardPage from './containers/Dashboard/DashboardPage';
import LoginPage from './containers/Login/LoginPage';
import ContactPage from './containers/Contact/ContactPage';
import EditProfilePage from './containers/Profile/EditProfilePage';
import RegistrationPage from './containers/Profile/RegistrationPage';
import Layout from './components/Layout'; 

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
  
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

const RoutesConfig = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
            <Route path="edit" element={<PrivateRoute><EditProfilePage /></PrivateRoute>}/>
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default RoutesConfig;