import { createSlice } from "@reduxjs/toolkit";
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer(store, { payload }) {
            store.push(payload);
            },
        },
        removeContact: (store, action) => store.filter(({id})=> id !== action.payload)
    }
})
export const {addContact, removeContact} = contactsSlice.actions;
export default contactsSlice.reducer;


