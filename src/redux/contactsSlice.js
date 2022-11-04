import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 0, name: "Learn HTML and CSS" },
        { id: 1, name: "Get good at JavaScript", number:123123},
        { id: 2, name: "Master React", number:123124},
        { id: 3, name: "Discover Redux", number:123125},
        { id: 4, name: "Build amazing apps", number:123126 },
]

export const contactsSlice = createSlice({
    name: 'contact',
    initialState: contactsInitialState,
    reducers: {
        addFriend: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(name, number) {
                return {
                    payload: {
                        id:nanoid(),
                        name,
                        number,
                    }
                }
            }
        },
        deleteFriend(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload)
            state.splice(index,1)
        }
    }
    
})