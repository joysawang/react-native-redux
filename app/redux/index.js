import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './../reducers';

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

export const enhancer = applyMiddleware(...middlewares);
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

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
