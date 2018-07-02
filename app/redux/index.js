import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './../reducers';

// Set persist config
// Key name
// Storage type: persist store, AsyncStorage, ...
// whitelist for save state reducers
// blacklist for unsave state reducers
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(logger);
}

// Set middlewares default use thunk and redux logger
export const enhancer = applyMiddleware(...middlewares);
// Create store
export const store = createStore(persistedReducer, enhancer);
// Create persistor store for load before running app
export const persistor = persistStore(store);

// Function for use on background task
// Fix bug not load store first time on background running
// Use: const store = await getPromisePersistor()
export function getPromisePersistor() {
  return new Promise((resolve, reject) => {
    try {
      const enhancer = applyMiddleware(...middlewares);
      const store = createStore(persistedReducer, enhancer);

      persistStore(
        store,
        null,
        () => resolve(store)
      );
    } catch (e) {
      reject(e);
    }
  });
}
