import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Corrigido para importação nomeada
import { API_URL } from '../config';

// Função para realizar login
export const login = async (loginModel) => {
    try {
        const response = await axios.post(`${API_URL}/User/Login`, loginModel);
        if (response.data) {
            const { token } = response.data;
            localStorage.setItem('token', token); // Armazena o token no localStorage
            storeTokenInfo(token); // Armazena informações do token
            return token;
        }
    } catch (error) {
        console.error('Erro ao fazer login', error);
        throw error;
    }
};

// Função para armazenar as informações do token
const storeTokenInfo = (token) => {
    const decoded = jwtDecode(token); // Use jwtDecode ao invés de jwt_decode
    localStorage.setItem('user', JSON.stringify(decoded));
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};

// Função para recuperar informações do usuário armazenadas
export const getUserInfo = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

// Função para sair da aplicação
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};