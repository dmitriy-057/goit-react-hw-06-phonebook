import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactReducer";
import filterReducer from "./filterReducer";
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})
export default rootReducer;