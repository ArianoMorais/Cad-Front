import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { login } from '../../services/authService'; // Importa a função de login
import './Login.css'; // Certifique-se de que o caminho está correto
import Form from '../../components/Form'; // Importa o componente Form

const Login = () => {
    const [model, setModel] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Cria uma instância de useNavigate

    const handleChange = (e) => {
        setModel({ ...model, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await login(model);
            if (token) {
                console.log(token);
                navigate('/dashboard'); // Redireciona para a tela de dashboard
            }
        } catch (err) {
            setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <Form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={model.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={model.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </Form>
        </div>
    );
};

export default Login;