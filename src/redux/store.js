import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({ reducer: {   contacts: rootReducer }},)

export default store;