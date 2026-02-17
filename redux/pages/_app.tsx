import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../store';
import '../styles/globals.css';

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest as any);
  const persistor = (store as any).__persistor;

  return (
    <Provider store={store}>
      {typeof window !== 'undefined' && persistor ? (
        <PersistGate loading={<div>Loading persisted state...</div>} persistor={persistor}>
          <Component {...props.pageProps} />
        </PersistGate>
      ) : (
        <Component {...props.pageProps} />
      )}
    </Provider>
  );
}

export default MyApp;
