import { combineReducers } from "redux";
import contactsReducer from "./Contacts/contactsSlice";
import filterReducer from "./Filter/filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})
export default rootReducer;