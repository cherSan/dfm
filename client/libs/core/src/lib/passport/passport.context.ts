import { createContext, useContext } from 'react';

export interface User {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
  sub: string;
}

export interface AuthContextType {
  user: User | undefined;
  loading: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const usePassport = () => useContext(AuthContext);
