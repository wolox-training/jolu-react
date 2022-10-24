import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { logoutSession } from 'services/usersService';

import LogoWolox from '../../screens/Dashboard/screens/assets/LogoWolox.png';

import styles from './styles.module.scss';

function NavBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const logout = () => {
    logoutSession();
    navigate('/');
  };

  return (
    <nav className={styles.nav}>
      <img src={LogoWolox} className={styles.logo} alt={t('Nav:logoAlt')} />
      <button type="submit" className={styles.logout} onClick={logout}>
        {t('Nav:logout')}
      </button>
    </nav>
  );
}

export default NavBar;
