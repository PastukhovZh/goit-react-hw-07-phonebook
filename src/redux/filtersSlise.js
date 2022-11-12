import {createSlice } from "@reduxjs/toolkit";


const filterInitialState = {
  filters: {value: ''}
}


const filtersSlice = createSlice({
    name: 'filters',
    initialState: filterInitialState,
    reducers: {
        findContact(state, action) {
     return {
      ...state,
        filters: {
          ...state.filters,
          value: action.payload,
        },
    }
        }
    }
})

export const { findContact } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer