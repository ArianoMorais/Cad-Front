import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, getUserInfo } from '../../services/authService';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = getUserInfo();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redireciona para a página de login após o logout
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {user ? (
                <div>
                    <p>Bem-vindo, {user.name}!</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Usuário não autenticado</p>
            )}
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
};

export default Dashboard;