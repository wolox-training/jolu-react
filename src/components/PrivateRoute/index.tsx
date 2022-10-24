import { useLocation, Navigate, Route, Routes } from 'react-router';

import BookDetail from 'components/BookDetail';
import Home from 'screens/Dashboard/screens/Home';
import { requiredAuth } from 'services/usersService';

export function Childrens() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export function PrivateRoute({ children }: any): any {
  const auth = requiredAuth();
  // const location = useLocation();

  return auth ? children : <Navigate replace to="/" />;
}
