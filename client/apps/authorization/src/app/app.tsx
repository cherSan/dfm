import { Logo } from '@dfm/ui';
import { usePassport } from '@dfm/core';
import { Button, Flex, Layout } from 'antd';
import styles from './app.module.scss';

export function App() {
  const { login } = usePassport();

  return (
    <Layout.Content>
      <Flex
        vertical={true}
        align='center'
        justify='center'
        className={styles.container}
      >
        <Logo />
        <Button type={'primary'} onClick={login}>Google Login</Button>
      </Flex>
    </Layout.Content>
  );
}

export default App;


