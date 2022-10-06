import { useTranslation } from 'react-i18next';

import { actionCreators as authActions } from 'contexts/UserContext/reducer';
import { useDispatch as useUserDispatch } from 'contexts/UserContext';
import { logout, removeCurrentUserToken } from 'services/AuthService';

import styles from './styles.module.scss';
import { withContextProvider, useSelector } from './context';

function Home() {
  const { t, i18n } = useTranslation();

  // Example of how to use these custom hooks
  const tech = useSelector((state) => state.tech);
  const userDispatch = useUserDispatch();

  const handleLogout = async () => {
    await logout();
    userDispatch(authActions.resetUser());
    removeCurrentUserToken();
  };

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={styles.app}>
      <nav>hola</nav>
    </div>
  );
}

export default withContextProvider(Home);
