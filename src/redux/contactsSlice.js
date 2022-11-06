import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsInitialState = {
  contacts: [
    { id: 0, name: "Learn", number: 12345},
    { id: 1, name: "Get", number: 12345},
    { id: 2, name: "Master", number: 12345 },
    { id: 3, name: "Discover", number: 12345 },
    { id: 4, name: "Build", number: 12345 },
  ],

};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                return {
                    ...state,
                    contacts: [...state.contacts, action.payload]
                }
            },
            prepare(name, number) {
                return {
                    payload:{
                    id: nanoid(),
                    name,
                    number}
                }
            }
        },
        deleteContact(state, action) {
            return {
      ...state,
                contacts:state.contacts.filter(contacts=>contacts.id !== action.payload)
    }
        }
    }
})



export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducers = contactsSlice.reducer