import { createContext, useContext } from 'react';

export interface User {
  id: string;
  email: string;
  hasWallet: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const usePassport = () => useContext(AuthContext);
