import { createReducer } from "@reduxjs/toolkit";
import {setFilter} from "./filterActions"; 

const filterReducer = createReducer('', {
    [setFilter.type]: ( _, action) => action.payload 
 })
 export default filterReducer;