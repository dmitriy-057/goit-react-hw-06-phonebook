import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer(store, { payload }) {
                console.log('store', store);
                console.log('payload', payload);
            store.push(payload);
            },
            prepare(data) {
                return {
                    payload: {
                        ...data,
                        id: nanoid(),
                    },
                };
            },
        },
        removeContact: (store, action) => store.filter(({id})=> id !== action.payload)
    }
})
export const {addContact, removeContact} = contactsSlice.actions;
export default contactsSlice.reducer;