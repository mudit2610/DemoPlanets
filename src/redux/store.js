import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import { AsyncStorage } from 'react-native';


const persistConfig = {
    key: 'PlanetsDemo',
    storage: AsyncStorage,
    whitelist: ['plnets', 'detail'],
    blacklist: [], // Disable persistence
};

const persistedReducers = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducers, applyMiddleware(thunk));
export const persistor = persistStore(store);


