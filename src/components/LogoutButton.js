import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Button
      startIcon={<LogoutIcon />}
      onClick={handleLogout}
      variant="contained"
      sx={{ position: 'absolute',  right: 16 }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;