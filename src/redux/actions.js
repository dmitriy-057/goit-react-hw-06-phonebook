import { nanoid } from "nanoid";
import { ADD_CONTACT,REMOVE_CONTACT, SET_FILTER } from "./types";
export const addContact = payload => {
return {
    types: ADD_CONTACT, 
    payload: {
        id: nanoid(), 
        ...payload,
    }
}
}

// const contactsId = {
    // id: nanoid(), 
    // ...contact}
// return [...prev, contactsId]