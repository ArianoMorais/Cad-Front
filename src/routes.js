
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import Contact from './containers/Contact/Contact';
import PrivateRoute from './components/PrivateRoute';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/contact"
          element={<PrivateRoute><Contact /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;