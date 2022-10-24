import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { requiredAuth } from 'services/usersService';

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (requiredAuth()) {
      navigate('/home');
    }
  }, [navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
