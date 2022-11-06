// const { createSlice } = require("@reduxjs/toolkit")

// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";





// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer)





import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contactsSlice";
import { filtersReducer } from "./filtersSlise";

// import {contactsReducer, filtersReducer } from "./reducer";


export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filters: filtersReducer, 
    }
});