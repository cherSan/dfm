import { FC, useCallback, ReactNode } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useCookieState, useRequest } from 'ahooks';
import { AuthContext, User } from './passport.context';

type Props = {
  children: ReactNode;
}

export const Passport: FC<Props> = ({children}) => {
  const [token, setToken] = useCookieState('access_token', {
    path: '/',
    expires: new Date(Date.now() + 60 * 60 * 1000), // 1 час
    sameSite: 'Strict',
  });

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setToken(tokenResponse.access_token);
    },
    onError: () => {
      console.log('Login Failed');
    },
    flow: 'implicit',
  });

  const login = useCallback(() => {
    googleLogin();
  }, [googleLogin]);

  const logout = useCallback(() => {
    console.log('logout');
  }, []);

  const { data: user, loading } = useRequest(
    async () => {
      if (!token) return undefined;

      const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return await res.json() as User;
    },
    {
      ready: !!token,
    }
  );

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



