import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/redux';
import RootComponent from './app/components/main';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* PersistGate load store before running app */}
        <PersistGate loading={null} persistor={persistor}>
          {/* Root components or routes */}
          <RootComponent />
        </PersistGate>
      </Provider>
    );
  }
}
