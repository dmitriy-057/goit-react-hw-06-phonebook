import { createReducer } from "@reduxjs/toolkit";
import {setFilter} from "./contactsActions"; 

const filterReducer = createReducer('', {
    [setFilter.type]: ( state, action) => action.payload
 })
 export default filterReducer;