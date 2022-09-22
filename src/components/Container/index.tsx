import React from 'react';

import LogoWolox from '../../screens/Dashboard/screens/assets/LogoWolox.png';

import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <div className={styles.logoWolox}>
          <img src={LogoWolox} className={styles.logo} alt="Logo wolox" />
        </div>
        {children}
      </article>
    </div>
  );
}

export default Container;
