import React from 'react';
import { Provider }from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
       <AppRouter />
    </Provider>
  );
}

export default App;
