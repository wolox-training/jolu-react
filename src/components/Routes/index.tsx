import { BrowserRouter as Router, Routes as RoutesSwitch, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'contexts/UserContext';
import Dashboard from 'screens/Dashboard';
import SignUp from 'screens/Dashboard/screens/SignUp';
import Login from 'screens/Dashboard/screens/Login';
import { Childrens, PrivateRoute } from 'components/PrivateRoute';

import Suspense from '../Suspense';

import { ROUTES } from './constants';
import styles from './styles.module.scss';

function Routes(): JSX.Element {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <div className={styles.container}>
        <Suspense>
          <RoutesSwitch>
            <Route path="/" element={<Dashboard />}>
              <Route path="sign_up" element={<SignUp />} />
              <Route path="/" element={<Login />} />
              <Route
                path="/*"
                element={
                  <PrivateRoute>
                    <Childrens />
                  </PrivateRoute>
                }
              />
            </Route>

            {ROUTES.map(({ redirectTo, path, element, ...config }) => (
              <Route
                key={path}
                path={path}
                element={redirectTo?.(user) ? <Navigate to={redirectTo?.(user) as string} /> : element}
                {...config}
              />
            ))}
          </RoutesSwitch>
        </Suspense>
      </div>
    </Router>
  );
}

export default Routes;
