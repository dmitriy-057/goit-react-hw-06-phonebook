// import { nanoid } from "nanoid";
// import { createAction } from "@reduxjs/toolkit";


// export const addContact = createAction("contacts/add", (data) => {
//     return {
//         payload: {
//             ...data,
//             id: nanoid()
//         }
//     }
// })
// export const removeContact = createAction("contacts/remove");


// export const addContact = payload => {
// return {
//     type: ADD_CONTACT, 
//     payload: {
//         id: nanoid(), 
//         ...payload,
//     }
// }
// }

// export const removeContact = payload => {
//     return {
//         type: REMOVE_CONTACT,
//         payload: payload,
//     }
// }

// const contactsId = {
    // id: nanoid(), 
    // ...contact}
// return [...prev, contactsId]