import { withContextProvider } from 'contexts/UserContext';
import 'scss/application.scss';
import SingUp from 'screens/Dashboard/screens/SignUp';

function App() {
  return <SingUp />;
}
export default withContextProvider(App);
