import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsReducer';
import filterReducer from './Filter/filterReducer';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";

const contactsPersistConfig = {
    key:'root',
    storage,
}

const reducer = combineReducers({ 
    contacts: contactsReducer, 
    filter: filterReducer 
});

const persistedContactsReducer = persistReducer(contactsPersistConfig, reducer);

export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)
