import React, { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  admin: boolean;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStoragedData(): Promise<AuthState> {
      const token = localStorage.getItem('@BirdsApp:token');
      const user = localStorage.getItem('@BirdsApp:user');

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        return { token, user: JSON.parse(user) };
      }

      return {} as AuthState;
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    });

    const { user, token } = response.data;

    if (!user.admin) {
      toast.error('Apenas usuário administradores podem acessar.');
      return;
    }

    localStorage.setItem('@BirdsApp:token', token);
    localStorage.setItem('@BirdsApp:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({
      user,
      token
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@BirdsApp:token');
    localStorage.removeItem('@BirdsApp:user');

    setData({} as AuthState);
  }, []);

  api.interceptors.response.use(
    response => response,
    async err => {
      if (err.response.status === 401 || err.response.status === 403) {
        signOut();
      }

      throw err;
    }
  );

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
