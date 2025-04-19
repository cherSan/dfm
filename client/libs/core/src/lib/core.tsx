import { FC, StrictMode, ReactNode, useMemo } from 'react';
import { BrowserRouter } from 'react-router';
import { ConfigProvider, Layout, theme } from 'antd';
import Passport from './passport/passport';
import { components, token } from './theme';
import style from './core.module.scss';
import './global.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';

type Props = {
  children: ReactNode;
}

export const Client: FC<Props> = ({
  children
}) => {
  const clientId = useMemo(() => '328564379068-9bpqeaatbrtv1nmvme39qdrghs1g94hf.apps.googleusercontent.com', []);

  return (
    <StrictMode>
      <GoogleOAuthProvider clientId={clientId}>
        <Passport>
          <BrowserRouter>
            <ConfigProvider
              theme={{
                algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
                token,
                components,
              }}
            >
              <Layout className={style.container}>
                {children}
              </Layout>
            </ConfigProvider>
          </BrowserRouter>
        </Passport>
      </GoogleOAuthProvider>
    </StrictMode>
  );
}



