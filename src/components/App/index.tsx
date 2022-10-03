import { Route, Routes } from 'react-router-dom';

import { withContextProvider } from 'contexts/UserContext';
import 'scss/application.scss';
import SignUp from 'screens/Dashboard/screens/SignUp';
import Login from 'screens/Dashboard/screens/Login';
import Home from 'screens/Dashboard/screens/Home';

function App() {
  return (
    <Routes>
      <Route path="sign_up" element={<SignUp />} />
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}
export default withContextProvider(App);
