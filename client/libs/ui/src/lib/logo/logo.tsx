import { FC, useMemo } from 'react';
import styles from './logo.module.scss';
import {Typography} from "antd";
export type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: FC<Props> = ({
  size
}) => {
  const fontSize = useMemo(() => {
    switch (size) {
      case 'xs': return '12px';
      case 'sm': return '16px'
      case 'md': return '24px'
      case 'lg': return '48px'
      case 'xl': return '96px'
      default: return '96px'
    }
  }, [size]);
  return (
    <Typography.Text
      className={styles.logo}
      style={{
        fontSize
      }}
    >
      ::DFM::
    </Typography.Text>
  );
}
