import { FC, useCallback, useState, ReactNode, useEffect } from 'react';
import { AuthContext, User } from './passport.context';

type Props = {
  children: ReactNode;
}

export const Passport: FC<Props> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (email: string, password: string) => {}, []);
  const logout = useCallback(async () => {}, []);
  const validate = useCallback(async () => {}, []);

  useEffect(() => {
    validate();
  }, [validate])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default Passport;



