import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contactsSlice";
import { filtersReducer } from "./filtersSlise";






export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filters: filtersReducer, 
        
    },
});