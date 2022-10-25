import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contactsActions"; 

 const contactsReducer = createReducer([], {
    [addContact.type]: (store, action) => {
        store.push(action.payload);
    },
    [removeContact.type]: (store, action) => {
        store.filter( ({id}) => id !== action.payload)
    }
 })
 export default contactsReducer;

//  const reducer = (store = initialState, action) => {
//     switch(action.type) {
//         case ADD_CONTACT:
//             const newContacts = [...store.contacts, action.payload];
//             return {...store, contacts: newContacts};
//         case REMOVE_CONTACT: 
//             const result = store.contacts.filter((item) => 
//                 item.id !== action.payload)
//                 return {...store, contacts: result};
//         case SET_FILTER:
//             return {...store, filter: action.payload}  
//         default:
//             return store;
//     }
    
// }
