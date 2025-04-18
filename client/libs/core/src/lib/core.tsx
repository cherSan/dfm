import { FC, StrictMode, ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import { ConfigProvider, Layout, theme } from 'antd';
import style from './core.module.scss';
import './global.scss';
import Passport from './passport/passport';

type Props = {
  children: ReactNode;
}

export const Client: FC<Props> = ({
  children
}) => {
  return (
    <StrictMode>
      <Passport>
        <BrowserRouter>
          <ConfigProvider
            theme={{
              algorithm: [theme.darkAlgorithm, theme.compactAlgorithm]
            }}
          >
            <Layout className={style.container}>
              {children}
            </Layout>
          </ConfigProvider>
        </BrowserRouter>
      </Passport>
    </StrictMode>
  );
}



