import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Snackbar } from 'components/Snackbar';
import { store, persistedStore } from 'services/redux/store';

import { AppRpouter } from './App.router';
import { ThemeProvider } from '../styles/theme';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <ThemeProvider>
        <Snackbar>
          <AppRpouter />
        </Snackbar>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
