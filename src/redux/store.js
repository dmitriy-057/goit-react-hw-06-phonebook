import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsReducer';
import filterReducer from './Filter/filterReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key:'root',
    storage,
}

const reducer = combineReducers({ 
    contacts: contactsReducer, 
    filter: filterReducer 
});

const persistedContactsReducer = persistReducer(contactsPersistConfig, reducer);

export const store = configureStore({ reducer: persistedContactsReducer});

export const persistor = persistStore(store)
