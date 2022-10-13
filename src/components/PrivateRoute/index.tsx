import { useLocation, Navigate } from 'react-router';

import { requiredAuth } from 'services/usersService';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = requiredAuth();
  const location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
