import apiClient from '../apiClient';

export const getUserInfo = async (userId) => {
    const result = await apiClient.get(`/User/Get/${userId}`);
    return result.data
  };

export const login = async (loginModel) => {
    const result = await apiClient.post('User/Login', loginModel);
    return result.data
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('jwtToken');
  return !!token;
};

export const getUserData = async (userId) => {
    const result = await apiClient.get(`/User/Get/${userId}`);
    return result.data
};

export const updateUserData = async (userData) => {
    await apiClient.post(`User/Update`, userData)
};

export const registerUser = async (userData) => {
    await apiClient.post(`User/Create`, userData)
};