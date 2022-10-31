import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import contactsSlice from 'redux/Contacts/contactsSlice';
import filterSlice from 'redux/Filter/filterSlice'
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
    key:'contacts',
    storage,
    blacklist: ['filter'],
}

const reducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice
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
