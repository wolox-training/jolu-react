import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { withContextProvider } from 'contexts/UserContext';
import Routes from 'components/Routes';

import 'scss/application.scss';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
export default withContextProvider(App);
