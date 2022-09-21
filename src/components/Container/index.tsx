import React from 'react';

import LogoWolox from '../../screens/Dashboard/screens/assets/LogoWolox.png';

import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className={styles.container}>
      <img src={LogoWolox} className={styles.logo} alt="Logo wolox" />
      {children}
    </div>
  );
}

export default Container;
