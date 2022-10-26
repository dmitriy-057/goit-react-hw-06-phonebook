import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key:'root',
    storage,
}
const persistedContactsReducer = persistReducer(contactsPersistConfig, {reducer: {
    contacts: rootReducer
}} )

const store = configureStore({ reducer: {   contacts: rootReducer }},)

export default store;