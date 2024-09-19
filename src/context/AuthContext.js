import React, { createContext, useState, useEffect, useContext } from 'react';
import { isAuthenticated, login as loginService, getUserInfo} from '../services/ApiService';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [userId, setUser] = useState(null);

  const authenticateUser = (user) => {
    localStorage.setItem('jwtToken', user.token);
    localStorage.setItem('userId', user.id);
    setIsLoggedIn(true);
    setUser(user.id);
  };

  const setIsLogedUserAuth = (result) => {
    setIsLoggedIn(true);
    setUser(result.id);
  }

  useEffect(() => {
    async function fetchData() {
        const idUser = window.localStorage.getItem("userId")
        if(idUser){
            try {
                var result = await getUserInfo(idUser);
                if (result)
                    setIsLogedUserAuth(result)
            } catch (error) {
                logout();
            }   
        }
      }
      fetchData()
  }, []);
  
  const login = async (loginModel) => {
    const result =  await loginService(loginModel);
    authenticateUser(result.data);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);