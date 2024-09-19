import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../context/AuthContext'; // Ajuste o caminho conforme necessário
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redireciona para a página de login após o logout
  };

  return (
    <Button
      startIcon={<LogoutIcon />}
      onClick={handleLogout}
      variant="contained"
      sx={{ position: 'absolute',  right: 16 }} // Estilos para posicionar no canto direito
    >
      Logout
    </Button>
  );
};

export default LogoutButton;